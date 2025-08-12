import React from 'react'
import work from '../assets/how it works section.png'

const Workflow = () => {
  return (
    <div>
        <h2 className='text-5xl justify-start'>How it Works</h2>
        <div className='justify-center my-3 mb-5 '>
            <img src={work} alt='hehehe'/>
        </div>
        <div className='flex justify-center m-2 bottom-2'>
            <button className="w-1/3 justify-self-center bg-sky-300  hover:bg-sky-100 text-black text-md font-serif hover:text-black px-8 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 py-2 font-poppins min-w-[160px]">
                See how it works
            </button>
        </div>
    </div>
  )
}

export default Workflow
