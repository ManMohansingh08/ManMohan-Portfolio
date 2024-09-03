import React from 'react'
import Avatarimg from "../../assets/Avatarimg.jpg"

const Home = () => {
  return (
    <div className='flex text-white w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:p-10'>
        <h1 className=' text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          Hello, I am Manmohan
        </h1>
        <p className='text-sm md:text-2xl tracking-tighter'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsa, quibusdam quam,
        </p>
        <button className='mt-5 md:mt-10  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
        duration-300 rounded-3xl hover:scale-105 font-semibold bg-slate-800 '>
          Contact me
        </button>
      </div>
      <div className='md:flex flex-wrap flex-col md:flex-row items-centerr '>
        <img
          src={Avatarimg} alt=""
          width={410}
          height={300}
          className='object-contain relative z-10  rounded-3xl'
        />

      </div>
    </div>
  )
}

export default Home