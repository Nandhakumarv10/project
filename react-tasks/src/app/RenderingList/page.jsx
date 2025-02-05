import React from 'react'

const products =[{
    title:"Audi",
    color:"red",
    id:1

},
{
    title:"BMW",
    color:"blue",
    id:2

},
]

export default function page() {
  return (
    <div className='bg-blue-300 w-full h-screen'>
        {products.map((product)=>(<div key={product.id}>

             {product.title}
        </div>))}
        
    </div>
    
  )
}
