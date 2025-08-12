import React from 'react'
import city from '../assets/end.jpg'
import Corestore from './Corestore'
import Footer from './Footer'

const Review = () => {
  return (
    <div className='relative'>
        <div className="h-full w-full relative">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${city})` }}
        ></div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t  from-slate-900/60 to-slate-900"></div>

        {/* Content */}
        <div className="relative z-10">
            <div className="flex m-6 w-80% h-60 p-10 justify-center">
                <h1 className="text-4xl italic pt-10 text-black rounded-lg text-center bg-sky-300">
                    Go Confidently in the direction of your dreams.<br/> Live the Life you Dream of.
                </h1>
            </div>
            <div className='m-6 p-4 font-bold flex justify-start'>
                <h1 className='text-white text-5xl'>Customer Reviews</h1>
            </div>
            <Corestore />
            <div className="flex m-8 w-80% h-60 p-10 justify-center">
                <h1 className="text-4xl italic pt-10 text-black rounded-lg text-center bg-sky-300">
                    Go Confidently in the direction of your dreams.<br/> Live the Life you Dream of.
                </h1>
            </div>
            <div className="flex m-8 w-80% h-60 p-10 justify-center">
                <h1 className="text-4xl italic pt-10 text-black rounded-lg text-center bg-sky-300">
                    Go Confidently in the direction of your dreams.<br/> Live the Life you Dream of.
                </h1>
            </div>
            <Footer/>
        </div>
        </div>

    </div>
  )
}

export default Review
