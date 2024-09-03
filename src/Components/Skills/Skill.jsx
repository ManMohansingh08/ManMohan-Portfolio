import React from 'react'
import {FaCss3 , FaHtml5 , FaJs , FaReact } from "react-icons/fa"
import { SiMysql} from "react-icons/si"

const Skill = () => {
  return (
    <div id='Skill' className='gap-5 p-12 md:p-24 overflow-hidden md:flex-wrap md:justify-center
    bg-black shadow-xl mx-o md:mx-20 bg-opacity-10 rounded-xl items-center mt-14'>
      <h1 className='text-2xl md:text-4xl text-white font-bold  '> Skill </h1>
      <div className='flex flex-wrap items-center justify-around '>
              <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                  <span className='p-3 bg-zinc-900 flex items-center  rounded-2xl'>
                        <FaHtml5 color="E34F26" size={50}/>
                  </span>
                  <span className='p-3 bg-zinc-900 flex items-center  rounded-2xl'>
                        <FaCss3 color="#1572b6" size={50}/>
                  </span>
                  <span className='p-3 bg-zinc-900 flex items-center  rounded-2xl'>
                        <FaJs color="F7DF1E" size={50}/>
                  </span>
                  <span className='p-3 bg-zinc-900 flex items-center  rounded-2xl'>
                        <FaReact color="61DAFB" size={50}/>
                  </span>
                  <span className='p-3 bg-zinc-900 flex items-center  rounded-2xl'>
                        < SiMysql color="f29111" size={50}/>
                  </span>
              </div>
      </div>
    </div>
  )
}

export default Skill