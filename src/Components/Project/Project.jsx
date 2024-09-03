import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='#Projects'
      className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold text-white'> Projects </h1>
      <div className='py-12 px-8 flex-wrap gap-5 '>
        <ProjectCard title="Co-Buddy Website" 
        main="This is a Key Word Matching Website . 
        In this website you can find same category sports people matches and its is created in Html, Css " />
      </div>

    </div>
  )
}

export default Project