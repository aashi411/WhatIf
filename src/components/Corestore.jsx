import React from 'react'
import u1 from '../assets/review/u1.png'
import u2 from '../assets/review/u2.png'
import u3 from '../assets/review/u3.png'
import u4 from '../assets/review/u4.png'
import u5 from '../assets/review/u5.png'
import u6 from '../assets/review/u6.png'
import u7 from '../assets/review/u7.png'
import u8 from '../assets/review/u8.png'
import { Star, StarHalf, StarOff } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Corestore = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
        } else {
            stars.push(<StarOff key={i} className="w-5 h-5 text-yellow-400 " />);
        }
        }
        return stars;
    };

  return (
    <div className='w-full m-auto'>
    <div className='mt-20'>
        <Carousel
        responsive={responsive}
        // infinite={true}
        >
        {reviews.map((d, index) => (
            <div
            key={index}
            className='w-120 h-60 m-2  bg-gradient-to-b from-gray-500 via-gray-600 to-gray-600 rounded-2xl shadow-lg p-6 flex gap-4 items-center text-start overflow-hidden'
            >
            <img
                src={d.image}
                alt='NA'
                className='h-30 w-30 mb-4'
            />
            <div className='flex flex-col'>
                <div>
                <p className='text-gray-200 mb-3 leading-relaxed line-clamp-4'>{d.text}</p>
                </div>
                <div className='flex items-center space-x-1 mb-3'>
                {renderStars(d.rating)}
                </div>
                <div className='text-gray-400 italic'>~ {d.name}</div>
            </div>
            </div>
        ))}
        </Carousel>
    </div>
    </div>

  )
}

const reviews = [
  {
    image: u1,
    text: "This tool helped me confidently decide between staying in Delhi or exploring opportunities in Dubai. Loved the clarity!",
    name: "Ananya Verma",
    rating: 4.5,
  },
  {
    image: u2,
    text: "Incredible visualization experience I had! But I wish it had even more cities to compare.",
    name: "Rahul Mehta",
    rating: 4,
  },
  {
    image: u3,
    text: "I was able to compare job opportunities across countries in minutes. Highly recommend!",
    name: "Priya Sharma",
    rating: 5,
  },
  {
    image: u4,
    text: "Helped me plan my relocation smoothly with accurate cost-of-living data.",
    name: "Shein Rai",
    rating: 4.5,
  },
  {
    image: u5,
    text: "Loved the clean interface and easy navigation. Made decision-making simple.",
    name: "Satvik Iyer",
    rating: 4,
  },
  {
    image: u6,
    text: "The comparisons between cities were spot on. Saved me hours of research!",
    name: "Vikram Singh",
    rating: 5,
  },
  {
    image: u7,
    text: "Gave me new perspectives on where to live next year. Truly insightful tool.",
    name: "Nisha Reddy",
    rating: 4.5,
  },
  {
    image: u8,
    text: "A must-have for anyone thinking of moving abroad. Loved the accuracy.",
    name: "Karan Malhotra",
    rating: 5,
  },
];


export default Corestore
