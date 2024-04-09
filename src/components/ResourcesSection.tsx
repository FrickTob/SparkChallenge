import React from 'react'
import { TextStrings } from '../Strings'

interface ResourcesSectionProps {
  textStrings: TextStrings
}

const ResourcesSection : React.FC<ResourcesSectionProps> = ({textStrings}) => {
  return (
    <div id="resourcesSection" className='h-screen'>
      <div className={`h-[5vh]`}></div>
      Resources Section
    </div>
  )
}

export default ResourcesSection
