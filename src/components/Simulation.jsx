import React from 'react'
import Card from './card'
import s1 from '../assets/Simulation/s1.jpg'
import s2 from '../assets/Simulation/s2.jpg'
import s3 from '../assets/Simulation/s3.jpg'
import s4 from '../assets/Simulation/s4.jpg'
import s5 from '../assets/Simulation/s5.jpg'
import s6 from '../assets/Simulation/s6.jpg'

const Simulation = () => {
  return (
    <div className='bg-black m-10  p-4 '>
        <div className='justify-start text-6xl font-bold'>
            <h2>Popular Simulation</h2>
        </div>
        <div className="grid grid-cols-3 justify-around p-4 m-3 bottom-6">
            <Card
                image={s1}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
            <Card
                image={s2}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
            <Card
                image={s3}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
            <Card
                image={s4}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
            <Card
                image={s5}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
            <Card
                image={s6}
                title="What if I moved to Tokyo?"
                description="Cost of living, culture shocks, and bullet trains."
                details={[
                "Cost of living details",
                "Cultural differences",
                "Transport system",
                "Lifestyle expectations",
                ]}
            />
        </div>
        <div className='flex justify-center m-2 bottom-2'>
            <button className="w-1/3 justify-self-center bg-sky-300  hover:bg-sky-100 text-black text-md font-serif hover:text-black px-8 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 py-2 font-poppins min-w-[160px]">
                Browse Simulation
            </button>
        </div>
    </div>
  )
}

export default Simulation
