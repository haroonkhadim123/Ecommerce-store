import React from 'react'
import Faq from './Faq'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addcart,increase,decrease } from '../redux/counter/counterSlice'
import { NavLink } from 'react-router-dom'

const Productdetail = () => {
     const dispatch = useDispatch()
      const {items} = useSelector((state) => state.counter)
    const {id} =useParams();
    const [detail, setdetail] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const detailproduct=async()=>{
        const a= await fetch(`https://fakestoreapi.com/products/${id}`)
        const res=await a.json()
        setdetail(res)
    }
    useEffect(() => {
        detailproduct();
    
    }, [id])
      const cartItem = items.find((item) => item.id!== detail?.id);

  return (
    <div>
        <div className="container mt-14 w-[90vw] flex overflow-hidden space-x-3  md:justify-around justify-center md:w-[90vw] md:flex-row  flex-col  m-auto items-center">
            <img className='md:w-[unset] w-[100%]' src={detail?.image} alt={detail?.title} />
            <div className="box flex  flex-col   justify-center space-y-2.5 md:mt-[unset] mt-4 md:w-[unset] w-[100%] m-auto ">
                <p className='text-gray-500'>Luxora</p>
                <p className='text-black font-medium text-4xl'>{detail?.title}</p>
                <p className='text-gray-500'>120S-B</p>
                <div className='flex gap-4 w-[100%]'>
                <p>${detail?.price}</p>
                <button className='bg-black text-white rounded-2xl px-2.5 py-0.5'>Sale</button>
                </div>
                <p className='text-gray-500'>Taxes included. <Link className='underline' href="/shipping">Shipping</Link> calculated at checkout.</p>
                <p className='text-gray-500'>Size</p>
                <ul className='flex flex-row gap-3.5'>
                    {["S", "M", "L"].map((size) => (
              <li
                key={size}
                onClick={() => setSelectedSize(size)} // ⭐ set selected size
                className={`cursor-pointer px-2.5 py-0.5 rounded-2xl 
                ${selectedSize === size ? "bg-black text-white" : "border border-gray-400 text-gray-600"}`}
              >
                {size}
              </li>
            ))}
                    
                </ul>
               
                <div className='flex gap-3.5 flex-col'>
                <Link className='text-gray-500 border border-black md:w-[250px] w-[100%] p-2 item-center justify-center flex' to="/cart" onClick={()=>dispatch(addcart(detail))}>Add to cart</Link>
                <Link className='text-white border bg-black md:w-[250px] w-[100%] p-2 item-center justify-center flex' to='/buy' onClick={()=>dispatch(addcart(detail))}>Buy it now</Link>
                </div>
            </div>
        </div>
        <Faq/>
    </div>
  )
}

export default Productdetail
