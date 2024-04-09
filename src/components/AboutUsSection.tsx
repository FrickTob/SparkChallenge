import React from 'react'
import { TextStrings } from '../Strings'

interface AboutUsSectionProps {
  textStrings: TextStrings
}

const AboutUsSection : React.FC<AboutUsSectionProps> = ({textStrings}) => {
  return (
    <div id='aboutUsSection' className='h-screen'>
      <div className={`h-[5vh]`}></div>
      About Us
    </div>
  )
}

export default AboutUsSection
