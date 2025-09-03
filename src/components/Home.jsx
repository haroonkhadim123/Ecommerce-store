import React, { useEffect } from 'react'
import image from '../assets/image.jpg'
import { useState } from 'react'
import Newcollection from './Newcollection'
import Loader from './Loader'
import { Link } from 'react-router-dom'




const Home = () => {
    const [four, setfour] = useState([])
const fourproduct=async()=>{
    const a= await fetch('https://fakestoreapi.com/products')
    const res=await a.json()
    
     setfour(res.slice(0, 4))
}
useEffect(() => {
    fourproduct()

}, [])

  return (
    <>
    <div>
        <div className="hero min-w-screen h-[70vh] flex justify-around items-center bg-gradient-to-b from-blue-100 to-white border-b-1 border-gray-500  ">
            <div className="left flex flex-col space-y-2">
                <p className='font-bold'>NEW ARRIVALS ONLY</p>
                <h1 className='font-bold md:text-5xl text-2xl'>new 👋</h1>
                <h1 className='font-bold md:text-5xl text-2xl'>collections</h1>
                <h1 className='font-bold md:text-5xl text-2xl'>for everyone</h1>
                  <div className='pt-5'>
                <Link to="/collection" className='bg-blue-600  py-2 px-5 text-white rounded mt-3.5'>Latest Collection <strong>&#8594;</strong></Link>
                </div>
                
            </div>
          
            <div className="right">
                <img className='md:h-[500px] h-[200px]' src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png" alt="" />
            </div>

            


        </div>
    </div>
    <div className="container flex flex-wrap justify-center items-center gap-6 mt-14 w-[90vw]  m-auto flex-col">
        <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Our Popular Products</span>

        <div className=" container flex flex-wrap justify-center items-center gap-6 mt-14 w-[100%] space-y-8 m-auto">
            {four.length===0?(<p><Loader/></p>
            ):(
                   four.map((item)=>(
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
     <div className="hero min-w-screen h-[70vh]  bg-center bg-contain bg-no-repeat mt-14">
            <img className='w-[100%] h-[100%]' src={image} alt="" />


        </div>
        <div className="mt-14 w-[90vw] m-auto flex justify-center flex-col items-center">
  <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block">
    Shop by Category
  </h2>
  <div className="flex gap-6 justify-center mt-8 flex-wrap">
    <div className="p-6 bg-gray-100 rounded-lg hover:shadow-lg cursor-pointer">👕 Men's Clothing</div>
    <div className="p-6 bg-gray-100 rounded-lg hover:shadow-lg cursor-pointer">👗 Women's Clothing</div>
    <div className="p-6 bg-gray-100 rounded-lg hover:shadow-lg cursor-pointer">💍 Jewelry</div>
    <div className="p-6 bg-gray-100 rounded-lg hover:shadow-lg cursor-pointer">💻 Electronics</div>
  </div>
</div>
<Newcollection/>





    
    
    
    
    </>
  )
}

export default Home