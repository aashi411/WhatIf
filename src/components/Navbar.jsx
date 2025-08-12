import logo from "../assets/logo.png"
import {UserRound} from "lucide-react"


const Navbar = () => {

    const navItems1 = [
        { label: "Simulator", href: "#Simulation" },
        { label: "Planner", href: "#" },
        { label: "Explorer", href: "#" },
    ];
    const navItems2 = [
        { label: "Community", href: "#Reviews" },
        { label: "About Us", href: "#Workflow" },
    ];

  return (
    <nav className='fixed insert-x-0 w-full  top-50 z-50 py-3 px-4 h-30 pt-20  '>
        <div className="container px-6 py-0 mx-auto relative bg-white/10 backdrop-blur-lg text-sm rounded-full">
            <div className="flex justify-between items-center font-bold text-xl">
                <ul className='hidden lg:flex space-x-12'>
                    {navItems1.map((item, index)=> (
                        <li key={index}>
                            <a href={item.href} className="hover:text-black cursor-pointer duration-150 ">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center flex-shrink-0">
                    <img className='h-16 w-16 mr-2' src={logo} alt='logoo' />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems2.map((item, index)=> (
                        <li key={index}>
                            <a className="hover:text-black cursor-pointer duration-150 " href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="h-10 w-10 p-2 rounded-full bg-black">
                    <UserRound />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
