import React from 'react'
import { TextStrings } from '../Strings'

interface AboutUsSectionProps {
  textStrings: TextStrings
}

const AboutUsSection : React.FC<AboutUsSectionProps> = ({textStrings}) => {
  return (
    <div id={`${textStrings.aboutUs}Section`} className='h-screen'>
      <div className={`h-16`}></div>
      About Us
    </div>
  )
}

export default AboutUsSection
