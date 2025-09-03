import React from 'react'
import { useState, useEffect } from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const Newcollection = () => {
  const [collection, setcollection] = useState([])

  const collectionproduct = async () => {
    const a = await fetch('https://fakestoreapi.com/products')
    const res = await a.json()
    console.log(res)
    setcollection(res.slice(6, 14))
  }
  useEffect(() => {
    collectionproduct();
  }, [])

  return (
    <div>
      <div className="container flex flex-wrap justify-center items-center gap-6 mt-14 w-[90vw]  m-auto flex-col">
        <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>New Collection</span>
        <div className="container flex flex-wrap justify-center items-center gap-6 mt-14 w-[100%] space-y-8 m-auto">
          {collection.length === 0 ? (<p><Loader /></p>) : (
            collection.map((item) => (
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

export default Newcollection