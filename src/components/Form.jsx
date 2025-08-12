import React , {useState} from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react';


const Form = () => {

    const [currentCity, setCurrentCity] = useState(false);
    const [desiredCity, setDesiredCity] = useState('');
    const [monthlySalary, setMonthlySalary] = useState('');
    const [lifestyle, setLifestyle] = useState('');

    const cities = [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
        'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Charlotte',
        'Indianapolis', 'Seattle', 'Denver', 'Boston', 'Detroit'
    ];
    const toggleSelect= ()=>{
        setCurrentCity(!currentCity);
    };


    const lifestyleOptions = [
        'Budget-conscious',
        'Moderate spending',
        'Comfortable lifestyle',
        'Luxury lifestyle',
        'High-end luxury'
    ];

  return (
    <div className='container w-full  m-10 sm:m-6 lg:m-12 rounded-xl p-4 bg-white/10 border border-white/20  backdrop-blur-lg'>
      <div className='p-8 w-full '>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-3 w-50%">
            <label className='block text-sky-300 text-sm font-bold'>
              Current City
            </label>
            <div className="relative">
              <select
                value={currentCity}
                onChange={(e) => setCurrentCity(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-1 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm appearance-none"
              >
                <option value="" className="backdrop-blur-lg text-sky-300">Select a city</option>
                {cities.map((city) => (
                <option key={city} value={city} className="bg-slate-800 text-sky-300">
                  {city}
                </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          {/* Desired City */}
          <div className="space-y-3 w-50%">
            <label className="block text-sky-300 text-sm font-bold">
              Desired City
            </label>
            <div className="relative">
              <select
                value={desiredCity}
                onChange={(e) => setDesiredCity(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-1 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm appearance-none font-poppins"
              >
                <option value="" className="bg-slate-800 text-white">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-slate-800 text-white">
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Salary */}
          <div className="flex items-center gap-4">
            <label className="text-sky-300 text-sm font-medium font-poppins whitespace-nowrap">
              Monthly Salary
            </label>
            <input
              type="text"
              placeholder="Enter your salary"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-1 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm font-poppins"
            />
          </div>

          {/* Lifestyle */}
          <div className="flex items-center gap-4">
            <label className="text-sky-300 text-sm font-medium font-poppins whitespace-nowrap">
              Lifestyle
            </label>
            <div className="relative flex-1">
              <select
                value={lifestyle}
                onChange={(e) => setLifestyle(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-1 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm appearance-none font-poppins"
              >
                <option value="" className="bg-slate-800 text-white">Select an option</option>
                {lifestyleOptions.map((option) => (
                  <option key={option} value={option} className="bg-slate-800 text-white">
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row gap-4 h-10 justify-center">
          <button className="w-1/3 bg-slate-900 hover:bg-slate-900/80 text-white px-8  rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 font-poppins min-w-[160px]">
            Explore Cities
          </button>
          
          <button className="w-1/3  bg-slate-900 hover:bg-slate-900/80 text-white px-8  rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 font-poppins min-w-[160px]">
            Surprise Me
          </button>
          
          <button className="w-1/3 bg-slate-900 hover:bg-slate-900/80 text-white px-8 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 font-poppins min-w-[160px]">
            Simulate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
