# FunRoad - Multi-tenant E-commerce Platform

FunRoad is a modern, multi-tenant e-commerce platform built with Next.js, Payload CMS, and Stripe. It provides a robust solution for managing multiple stores with shared infrastructure while maintaining data isolation.

## 🚀 Features

- **Multi-tenant Architecture**: Support for multiple independent stores with isolated data
- **Modern Tech Stack**:
  - Next.js 15 with App Router
  - Payload CMS for content management
  - Stripe for payments and Connect for multi-tenant payments
  - tRPC for type-safe API calls
  - React Query for data fetching
  - Tailwind CSS for styling
  - Radix UI for accessible components

- **E-commerce Features**:
  - Product management
  - Order processing
  - Payment processing with Stripe
  - Multi-tenant payment handling with Stripe Connect
  - Shopping cart functionality
  - User authentication and authorization

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Radix UI Components
  - React Query
  - tRPC

- **Backend**:
  - Payload CMS
  - MongoDB
  - Stripe
  - tRPC

## 📦 Prerequisites

- Node.js 18+
- Bun (recommended) or npm
- MongoDB
- Stripe account with Connect enabled

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/funroad.git
   cd funroad
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   PAYLOAD_SECRET=your_payload_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. **Run the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Seed the database (optional)**
   ```bash
   bun run db:fresh
   bun run db:seed
   ```

## 📁 Project Structure

```
funroad/
├── app/                    # Next.js app router pages
├── collections/            # Payload CMS collections
├── components/            # Reusable React components
├── constants/             # Application constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── media/                 # Uploaded media files
├── public/                # Static assets
├── store/                 # State management
├── trpc/                  # tRPC router and procedures
├── types/                 # TypeScript type definitions
└── Server/                # Server-side configurations
```

## 🔧 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run generate:types` - Generate Payload CMS types
- `bun run db:fresh` - Reset and migrate database
- `bun run db:seed` - Seed database with initial data

## 🔐 Authentication

The platform uses Payload CMS's built-in authentication system with the following features:
- User registration and login
- Role-based access control
- JWT-based authentication
- Password reset functionality

## 💳 Payment Processing

The platform uses Stripe for payment processing with the following features:
- Secure payment processing
- Multi-tenant payment handling with Stripe Connect
- Webhook handling for payment events
- Support for multiple payment methods

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Payload CMS](https://payloadcms.com/)
- [Next.js](https://nextjs.org/)
- [Stripe](https://stripe.com/)
- [Radix UI](https://www.radix-ui.com/)
- [tRPC](https://trpc.io/)
