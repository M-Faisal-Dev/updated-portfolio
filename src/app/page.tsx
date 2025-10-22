import React from 'react'
import Hero from './_components/Hero'
import Skill from './_components/Skill'
import Project from './_components/Project'
import Experience from './_components/Experience'
import Services from './_components/Services'
import Testimonial from './_components/Testimonial'
import FloatingActions from '../components/FloatingActions'
import FloatingSocialIcons from '../components/FloatingSocialIcons'

function Page() {
  return (
  
      
      <div className="w-full">
        <Hero />
        <Skill />
        <Project />
        <Experience />
        <Services />
        <Testimonial />

         <FloatingActions />
         
        <FloatingSocialIcons />

      </div>

  )
}

export default Page
