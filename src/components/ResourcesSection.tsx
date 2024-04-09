import React from 'react'
import { TextStrings } from '../Strings'

interface ResourcesSectionProps {
  textStrings: TextStrings
}

const ResourcesSection : React.FC<ResourcesSectionProps> = ({textStrings}) => {
  return (
    <div id={`${textStrings.resources}Section`} className='h-screen'>
      <div className={`h-16`}></div>
      Resources Section
    </div>
  )
}

export default ResourcesSection
