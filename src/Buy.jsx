import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { clear } from './redux/counter/counterSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'





const Buy = () => {
  const [input, setinput] = useState()
  
    const {items} = useSelector((state) => state.counter)
    const dispatch=useDispatch()
     const navigate = useNavigate()
     
       const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()
    const onSubmit = (data) => {
      if (items.length === 0) {
    toast.error("Your cart is empty 🛒");
    return;
  }
      
      console.log(data)
         dispatch(clear())
    toast("Order completed successfully ✅")
     navigate('/')
    }
  return (
    <div>
      
      <div className="container w-[90vw] md:flex-row flex-col m-auto flex justify-center items-center mt-14 md:mt-0">
        <div className="input-box flex fle-col w-screen justify-center  space-y-3.5  md:border-r-1 border-gray-300 md:h-screen  ">
          
      
    <form action='' onSubmit={handleSubmit(onSubmit)} className='space-y-3.5 flex flex-col justify-center items-center md:w-[unset] w-[90%]'>
      <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Buy Now</span>
      <div className="input flex flex-col w-[100%] space-y-2 ">
  
      <input className='md:w-[30vw] p-2 rounded-xl border border-gray/20 ' type="Email" {...register("Email",{required:{value:true,message:'Enter Your Email'}})} placeholder='Enter Your Email' onChange={(e)=>setinput(e.target.value)} />

 {errors.Email && <span className='text-red-600'>{errors.Email.message}</span>}
 </div>
  <div className="input input flex flex-col w-[100%] space-y-2">
      
      <input className='md:w-[30vw] p-2 rounded-xl border border-gray/20 ' type='username' {...register("username", { required: {value:true,message:'Enter Your Name'} })} placeholder='Name' onChange={(e)=>setinput(e.target.value)} />
  
      {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
      </div>
       <div className="input input flex flex-col w-[100%] space-y-2">

      <input className='md:w-[30vw] p-2 rounded-xl border border-gray/20 ' type='text' {...register("address", { required: {value:true,message:'Enter Your Address'} })} placeholder='Adress' onChange={(e)=>setinput(e.target.value)} />
  
      {errors.address && <span className='text-red-600'>{errors.address.message}</span>}
      </div>
      <div className="input input flex flex-col w-[100%] space-y-2">
        <input className='md:w-[30vw] p-2 rounded-xl border border-gray/20 ' type='text' {...register("city", { required: {value:true,message:'Enter Your City'} })} placeholder='City' onChange={(e)=>setinput(e.target.value)} />
  
      {errors.city && <span className='text-red-600'>{errors.city.message}</span>}
      </div>
          <div className="input input flex flex-col w-[100%] space-y-2">

        <input className='md:w-[30vw] p-2 rounded-xl border border-gray/20 ' type='value' {...register("contact", { required: {value:true,message:'Enter Your Phone Number'} })} placeholder='Contact' onChange={(e)=>setinput(e.target.value)} />

  
      {errors.contact && <span className='text-red-600'>{errors.contact.message}</span>}
      </div>
       <input disabled={isSubmitting} type="Submit" value='Complete Order' className='bg-blue-600 p-1.5 text-white rounded-xl md:w-[unset] w-[100%]' />
      </form>
      </div>

      <div className="container w-[100%] md:mt-0 mt-10  items-center space-y-3.5  flex flex-col md:mb-[250px] ">
        <span className='text-2xl font-bold  border-b-blue-600 border-b-4'>Order Summary</span>
        {items.map((item)=>(
           <div className='mt-2.5 flex items-center space-x-20 w-[60%] justify-between  space-y-3.5 border-b-1 border-gray-200 ' key={item.id}>
          <div className='flex items-center gap-4'>
          <div className='w-[100px] relative'>
        <img className='w-[100%]' src={item?.image} alt={item?.title} />
        <div className='w-[20px] h-[20px] rounded-full bg-gray-500 items-center justify-center flex absolute top-0 right-0'>{item.qty || 1}</div>
        </div>
        <p>{item?.title}</p>
        <p>${item?.price}</p>
        </div>
        
        </div>
          
        ))}
       
        <div className="box w-[60%] space-y-3.5 flex flex-col  ">
          <div className="ship w-[100%] flex justify-between ">
            <p>Shipping</p>
            <p>Free</p>
             </div>
            <div className="total ship w-[100%] flex justify-between">
              <p className='font-bold'>Total</p>
              <p>${total}</p>
            </div>
         
        </div>

      </div>
         
      
        </div>

      </div>
    
  )
}

export default Buy