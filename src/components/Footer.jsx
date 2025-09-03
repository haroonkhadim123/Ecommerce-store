import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram,FaFacebook,FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className="container relative md:w-[80vw] w-[90vw] px-1.5 m-auto mt-14 h-[70vh]  bg-gradient-to-b from-blue-100 to-white flex flex-col items-center border-b-2 border-gray-300 ">

    <div className="box  w-[100%] mt-16 flex items-center justify-center flex-col space-y-5">
    <p className='font-medium md:text-4xl text-3xl flex justify-center'>Get Exclusive Offer On Your Email</p>
    <p>Subscribe to our newsletter and stay updated</p>
    <div className='w-[100%] flex items-center justify-center'>
    <input className='bg-transparent border border-white/70 p-1 w-[300px] rounded-2xl' type="text" placeholder='Your email' />
    <button className='bg-black text-white px-4.5 py-1 rounded-4xl'>Subscribe</button>
    </div>
    </div>


    <div className="box  w-[100%] mt-16 flex items-center justify-center flex-col space-y-5 absolute bottom-8">
        <h2 className='font-medium text-4xl'>SHOPPER</h2>
        <ul className='space-x-4 flex flex-wrap justify-center'>
            <Link className='text-gray-500' to="/privacy">Privacy Policy</Link>
            <Link className='text-gray-500' to="/refund">Refund Policy</Link>
            <Link className='text-gray-500' to="/shipping">Shipping Police</Link>
            <Link className='text-gray-500' to="/term">Term Policy</Link>
        </ul>
        <ul className='flex space-x-4'>
            <a href="https://www.instagram.com/haroonkhadim23?igsh=cG5wMXVseTB2YW5i"><FaInstagram className='className="text-pink-600  cursor-pointer hover:scale-110 transition'/></a>
            <a href="https://www.instagram.com/haroonkhadim23?igsh=cG5wMXVseTB2YW5i"><FaFacebook className='className="text-pink-600  cursor-pointer hover:scale-110 transition'/></a>
            <a href="https://wa.me/923556560893?text=Hello%20I%20want%20to%20contact%20you"><FaWhatsapp className='className="text-pink-600  cursor-pointer hover:scale-110 transition'/></a>
        </ul>

    </div>


</div>
        <div className="footer w-full mt-2 flex justify-center items-center md:py-2 py-3 font-medium">
            Copright &copy; 2023- All Right Reserved

        </div>
    </div>
  )
}

export default Footer