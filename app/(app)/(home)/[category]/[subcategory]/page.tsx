import React from 'react'

type Props = {
    params: Promise<{
        category: string,
        subcategory: string
    }>
}

const page = async ({params}: Props) => {
    const {category,subcategory} = await params;
  return (
    <div>{category}
    <br />
    {subcategory}</div>
  )
}

export default page