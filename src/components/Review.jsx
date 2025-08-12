import React from 'react'
import city from '../assets/end.jpg'
import Corestore from './Corestore'
import Footer from './Footer'
import { Quote } from 'lucide-react'

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
        <div className="absolute inset-0 bg-gradient-to-t  from-slate-900/70 to-slate-900"></div>

        {/* Content */}
        <div className="relative z-10">
            <div className="flex  justify-center">
                <div className='p-4  bg-sky-300 m-8 w-3/4 h-44 flex flex-col text-center rounded-lg'>
                    <div className='fill-black text-black '><Quote /></div>
                    <h1 className="text-4xl italic  text-black  ">
                        Go Confidently in the direction of your dreams.<br/> Live the Life you Dream of.
                    </h1>
                    <div className='text-sm text-end italic font-bold pb-5 text-gray-700'>~ Henery David Thoreau</div>
                </div>
            </div>
            <div className='m-6 p-4 font-bold flex justify-start'>
                <h1 className='text-white text-5xl'>Customer Reviews</h1>
            </div>
            <Corestore />
            <div className="flex  justify-start">
                <div className='p-4  bg-sky-300 m-8 w-3/4 h-40 flex flex-col text-center rounded-lg'>
                    <div className='fill-black text-black '><Quote /></div>
                    <h1 className="text-4xl italic  text-black  ">
                        In the middle of every difficulty lies opportunity.
                    </h1>
                    <div className='text-sm text-end italic font-bold pb-5 text-gray-700'>~ Albert Einstein</div>
                </div>
            </div>
            <div className="flex  justify-end">
                <div className='p-4  bg-sky-300 m-8 w-3/4 h-40 flex flex-col text-center rounded-lg'>
                    <div className='fill-black text-black '><Quote /></div>
                    <h1 className="text-4xl italic  text-black  ">
                        The best way to predict the future is to create it.
                    </h1>
                    <div className='text-sm text-end italic font-bold pb-5 text-gray-700'>~ Perter Druker</div>
                </div>
            </div>
            <Footer/>
        </div>
        </div>

    </div>
  )
}

export default Review
