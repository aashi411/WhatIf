import logo from "../assets/logo.png"
import {UserRound} from "lucide-react"


const Navbar = () => {

    const navItems1 = [
        { label: "Simulator", href: "#" },
        { label: "Planner", href: "#" },
        { label: "Explorer", href: "#" },
    ];
    const navItems2 = [
        { label: "Community", href: "#" },
        { label: "About Us", href: "#" },
    ];

  return (
    <nav className='stickey top-50 z-50 py-3 px-4 h-30 pt-20  '>
        <div className="container px-6 py-0 mx-auto relative backdrop-blur-lg text-sm rounded-full">
            <div className="flex justify-between items-center font-bold text-xl">
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems1.map((item, index)=> (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center flex-shrink-0">
                    <img className='h-20 w-20 mr-2' src={logo} alt='logoo' />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems2.map((item, index)=> (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
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
