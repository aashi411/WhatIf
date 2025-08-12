import React from 'react'
import Navbar from './Navbar'
import heroImage from '../assets/hero.jpg'
import Form from './Form'
import Workflow  from "./Workflow"
import Simulation from './Simulation'
import city from '../assets/end.jpg'
import Review from './Review'

const HeroSection = () => {
  return (
    <>
    <div className='min-h-full'>
        <div className="h-screen w-full 
                    bg-cover bg-center bg-no-repeat
                    bg-black relative" 
            style={{backgroundImage: `url(${heroImage})`}}>
            <Navbar/>
            <div className='flex flex-col'>
                <div className='m-10 px-16 justify-items-start'>
                    <h1 className='text-6xl top-6 text-bold'>What if your Life <br/> Changed?</h1>
                    <h5  className='text-bold text-lg py-4'>
                        Wondering how your life would look in a new city?<br/>
                        Curious about living with a different salary or lifestyle?<br/>
                        We pull real world data to simulate your possible future.<br/>
                        Compare, visualize, and explore your 'what if' life today.
                    </h5>
                </div>
                <div className='relative bg-gradient-to-b from-transparent via-black to-black'>
                    <div className=" mt-6 w-full justify-items-center px-4 z-10">
                    <Form/>
                    </div>
                </div>
                <div className='top-auto'></div>

            </div>
            <div className="bg-black h-auto pt-50">
                {/* Content below contact form */}
                <div className="container mx-auto px-4">
                    <Workflow/>
                </div>
                <div className='h-full'>
                    <Simulation/>
                </div> 
                <div className='relative'>
                    <Review/>
                    {/* <div className="h-full w-full 
                        bg-cover bg-center bg-no-repeat
                        bg-black absolute" 
                        style={{backgroundImage: `url(${city})`}}>
                        <div className='flex justify-start m-8 p-10 absolute' >
                            <div className='text-lg bg-opacity-50 italic text-black rounded-lg bg-sky-300'>Go Confidently in the directions of ypur dreams.</div>
                        </div>
                    </div>   */}
                    
                </div>     
            </div>
        </div>
        
        
    </div>
    {/* <img src={city}
        className='w-full'
        alt='city'/>
        <div className='flex justify-start m-8 p-10 absolute' >
            <div className='text-lg bg-opacity-50 italic text-black rounded-lg bg-sky-300'>Go Confidently in the directions of ypur dreams.</div>
    </div> */}
    </>
)
}

export default HeroSection
