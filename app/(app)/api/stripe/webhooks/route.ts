import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getPayload } from 'payload'
import config from '@payload-config'
import Stripe from 'stripe'
import { ExpandedLineItem } from '@/types/product-metadata'

export async function POST(req: Request) {
    const signature = req.headers.get('stripe-signature')
    
    if (!signature) {
        return NextResponse.json(
            { error: 'Missing stripe signature' },
            { status: 400 }
        )
    }

    try {
        const body = await req.text()
        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )

        console.log('Processing webhook event:', event.id)
        
        const permittedEvents: string[] = [
            'checkout.session.completed'
        ]

        if (!permittedEvents.includes(event.type)) {
            return NextResponse.json(
                { message: `Event type ${event.type} not handled` },
                { status: 200 }
            )
        }

        const payload = await getPayload({ config })

        try {
            switch (event.type) {
                case 'checkout.session.completed': {
                    const session = event.data.object as Stripe.Checkout.Session
                    
                    if (!session.metadata?.userId) {
                        throw new Error('User ID is required in session metadata')
                    }

                    const user = await payload.findByID({
                        collection: 'users',
                        id: session.metadata.userId
                    })

                    if (!user) {
                        throw new Error(`User not found with ID: ${session.metadata.userId}`)
                    }

                    const expandedSession = await stripe.checkout.sessions.retrieve(
                        session.id,
                        {
                            expand: ['line_items.data.price.product']
                        }, {
                            stripeAccount: event.account
                        }
                    )

                    if (!expandedSession.line_items?.data?.length) {
                        throw new Error('No line items found in session')
                    }

                    const lineItems = expandedSession.line_items.data as ExpandedLineItem[]
                    
                    // Process all line items
                    const orderPromises = lineItems.map(async (item) => {
                        if (!item.price?.product?.metadata?.id) {
                            throw new Error('Product metadata ID is missing')
                        }

                        return payload.create({
                            collection: 'orders',
                            data: {
                                stripeCheckoutSessionId: session.id,
                                stripeAccountId: event.account as string,
                                user: user.id,
                                product: item.price.product.metadata.id,
                                name: item.price.product.name
                            }
                        })
                    })

                    await Promise.all(orderPromises)
                    
                    return NextResponse.json(
                        { message: 'Orders created successfully' },
                        { status: 200 }
                    )
                }
                case 'account.updated': {
                    const data = event.data.object as Stripe.Account;
                    console.log('Entered the case', data.id)
                    await payload.update({
                        collection: 'tenants',
                        where: {
                            stripeAccountId: {
                                equals: data.id
                            }
                        },
                        data: {
                            stripeDetailsSubmitted: data.details_submitted
                        }
                    })
                    break;
                }
                default:
                    return NextResponse.json(
                        { message: `Unhandled event type: ${event.type}` },
                        { status: 200 }
                    )
            }
        } catch (error) {
            console.error('Webhook handler error:', error)
            return NextResponse.json(
                { error: error instanceof Error ? error.message : 'Webhook handler failed' },
                { status: 500 }
            )
        }
    } catch (err) {
        console.error('Webhook signature verification failed:', err)
        return NextResponse.json(
            { error: 'Webhook signature verification failed' },
            { status: 400 }
        )
    }
}