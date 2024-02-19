import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/promoimg.jpg"
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12  bg-emerald-200  px-24 '>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2 ml-16'>
                <h2 className='text-4xl font-bold mb-6 loading-snug'>
                    2024 Book Reading Challange is Here
                </h2>
                <Link to="/shop" className=" block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            GET Promo Code
          </button>
        </Link>
            </div>
            <div>
              <img  src={bookPic} alt="" className='w-96 rounded-lg mr-16'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner