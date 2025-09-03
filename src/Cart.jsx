import React from 'react'
import {FaTrash} from 'react-icons/fa6'
import { useSelector,useDispatch } from 'react-redux'
import { remove,increase,decrease,buy } from './redux/counter/counterSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
     const {items} = useSelector((state) => state.counter)
    const dispatch=useDispatch()
      const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <div>
          <div className="container flex flex-col justify-center items-center gap-4 mt-14 w-[80vw] m-auto">
        {items.length === 0 ? (
            <>
          <h2 className="text-xl font-bold">Cart is Empty</h2>
          <Link to="/collection" className='bg-blue-600 p-1.5 text-white'>Continue Shopping <strong>&#8594;</strong></Link>
          </>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="card flex items-center justify-between bg-white shadow-md w-[100%] md:py-1.5 py-3 px-1.5"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="image bg-gray-100 p-3 md:h-[250px] md:w-[300px] w-[100px] h-[10vh]"
                />
                <div className="box md:space-y-2">
                 
                  <h2 className="text-black font-bold sm:text-sm md:text-[unset]">{item?.title}</h2>
                  <p className="text-gray-600">${item?.price}</p>
<div className='mb-5'>
                  <span className="border border-black px-1.5 cursor-pointer"  onClick={()=>dispatch(decrease(item.id))}  >-</span>
                  <span className="border border-black px-1.5">{item.qty}</span>
                  <span className="border border-black px-1.5 cursor-pointer" onClick={()=>dispatch(increase(item.id))} >+</span>
                  </div>
                 
                </div>
                
              </div>
              <div>
                <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(remove(item.id))}>
                  <FaTrash size={24} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Line separator */}
      <div className="line w-[80vw] m-auto h-0.5 border border-gray-200 shadow-2xl mt-4"></div>

      {/* Total */}
      <div className="line w-[80vw] m-auto mt-4 justify-end flex">
        <b>Total:</b> <span>${total}</span>
      </div>
      <div className="line w-[80vw] m-auto mt-4 justify-center flex">
       <Link to="/buy" className='bg-blue-600 p-1.5 text-white ' >Check Out <strong>&#8594;</strong></Link>
       </div>
    </div>
  )
}

export default Cart