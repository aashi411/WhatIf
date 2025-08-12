import React from 'react'
import logo from '../assets/logo.png'
import { Mail, Compass, Youtube, Twitter, Instagram , MapPin, ClipboardList, HelpCircle, Settings, Users, LogIn, LayoutDashboard, Bell } from "lucide-react";

const Footer = () => {
  return (
    // <div className='h-1/4 w-full p-2 m-4'>
    //   <div className='text-center underline-offset-1 text-md text-sky-300'>Contact Us</div>
    //   <div className='border border-b-2 border-sky-300'>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //   </div>
    //   <div></div>
    // </div>

    <footer className="bg-black bg-opacity-70   text-sky-300 py-4 p-12">
        <div className='flex flex-col-3 justify-between'>
            <div className="flex items-center gap-2">
            <img src={logo} alt="What If Simulator" className="w-12 h-12" />
            </div>

            <a href="#ContactUs" className="text-blue-300 underline">
            Contact Us
            </a>

            {/* Social icons */}
            <div className="flex gap-4 text-2xl text-sky-300">
            <a href="#" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
            </a>
            </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        {/* Stay in loop */}
        <div>
          <h3 className="font-semibold mb-2">Stay in loop :</h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email Address.."
              className="px-3 py-2 rounded-md bg-transparent border border-gray-400 text-sm focus:outline-none focus:border-white"
            />
            <button className="text-sky-300 underline w-fit hover:text-pink-400">
              Submit
            </button>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2 underline">Explore</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <Compass size={18} /> popular simulations
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <MapPin size={18} /> city explorer
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <ClipboardList size={18} /> lifestyle planner
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2 underline">Company</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <HelpCircle size={18} /> about us
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <Settings size={18} /> how it works
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <Users size={18} /> community
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2 underline">Account</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <LogIn size={18} /> login/register
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <LayoutDashboard size={18} /> dashboard
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <Bell size={18} /> notifications
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-8 border-t border-gray-500 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 What If Simulator. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
