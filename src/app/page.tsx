import React from 'react'
import Hero from './_components/Hero'
import Skill from './_components/Skill'
import Project from './_components/Project'
import Experience from './_components/Experience'

function Page() {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl">
        <Hero />
        <Skill />
        <Project />
        <Experience />
      </div>
    </div>
  )
}

export default Page
