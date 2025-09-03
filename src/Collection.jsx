import React from 'react'
import image2 from './assets/image2.jpg'
import Loader from './components/Loader'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


const Collection = () => {
  const [products, setproducts] = useState([])

  const product=async()=>{
      const a= await fetch('https://fakestoreapi.com/products')
      const res=await a.json()
      
       setproducts(res)
  }
  useEffect(() => {
      product()
  
  }, [])
  return (
    <div>
 <div className="hero w-[90vw] m-auto mt-2.5 h-[50vh]  bg-center bg-contain relative  ">
            <img className='w-[100%] h-[100%]' src={image2} alt="" />
            <Link to="/Buy" className='bg-white  py-2 px-5 text-black rounded absolute top-70 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>Shop Now <strong>&#8594;</strong></Link>


        </div>
 <div className="container flex flex-wrap justify-center items-center gap-6 mt-14 w-[90vw]  m-auto flex-col">
        <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Our Popular Products</span>

        <div className=" container grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2  justify-center items-center gap-6 mt-14 w-[100%] space-y-8 m-auto">
            {products.length===0?(<p><Loader/></p>
            ):(
                   products.map((item)=>(
            <div className="card md:w-[280px]   w-[100%] h-[400px] flex flex-col gap-1 relative  rounded-lg hover:scale-105 transition"
 key={item.id}>
                <img className='w-[100%] bg-gray-100 p-3 h-[230px]' src={item?.image} alt="" />
                   <h2 className="text-black font-bold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <Link className='bg-blue-600 absolute bottom-0 flex py-2 px-5 text-white rounded' to={`/productdetail/${item.id}`}>View Detail</Link>
            </div>
            
            

        )) 
            )}
    
    </div>
    
    </div>

    </div>
  )
}

export default Collection