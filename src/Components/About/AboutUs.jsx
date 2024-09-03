import React from 'react'
import AboutAvatar from "../../assets/AboutAvatar.jpg"
import { IoArrowForward } from 'react-icons/io5'


const AboutUs = () => {
  return (
    <div id='About' className='  text-white items-center md:flex overflow-hidden md:flex-wrap md:justify-center
    bg-black shadow-xl mx-o md:mx-20 bg-opacity-25 rounded-xl p-12'>

      <div>
        <h1 className='text-2xl md:text-4xl font-bold'>
              About 
        </h1>
        <div className='mt-2 md:flex flex-wrap flex-col md:flex-row items-center'>
            <img width={420}
            height={200}
            className='md:h-80 rounded-2xl'
            src={AboutAvatar} alt="About Img" />

            <ul>
              <div className='flex gap-4 py-4 px-4' >
                <IoArrowForward size={30 }
                className='mt-2 '/>
                <span className='w-96'>
                      <h1 className='text-xl md:text-2xl  mt-2 font-semibold leading-normal'>
                      Frontend Developer
                      </h1>
                      <p className='text-sm md:text-md leading-tight'>
                        Lorem ipsum dolor sit amet consectetur 
                      </p>
                </span>
              </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs