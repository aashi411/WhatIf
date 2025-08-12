
import heroImage from '../assets/hero.jpg'
import Form from './Form'
import Workflow  from "./Workflow"
import Simulation from './Simulation'
import Review from './Review'

const HeroSection = () => {
  return (
    <>
    <div className='min-h-full'>
        <div className="h-screen w-full 
                    bg-cover bg-center bg-no-repeat
                    bg-black relative" 
            style={{backgroundImage: `url(${heroImage})`}}>
            <div className=' flex flex-col'>
                <div className='m-10 mt-48 px-16 justify-items-start font-serif'>
                    <h1 id='ContactUs' className='text-6xl top-6 text-bold'>What if your Life <br/> Changed?</h1>
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
                <div id='Workflow' className="container mx-auto px-4">
                    <Workflow/>
                </div>
                <div id='Simulation' className='h-full'>
                    <Simulation/>
                </div> 
                <div id='Reviews' className='relative'>
                    <Review/>
                    
                </div>     
            </div>
        </div>
        
        
    </div>

    </>
)
}

export default HeroSection
