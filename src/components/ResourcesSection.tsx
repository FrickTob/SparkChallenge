import React, { useEffect, useState } from 'react'
import { TextStrings } from '../Strings'
import axios from 'axios'
import Resource from '../dataObjects'

interface ResourcesSectionProps {
  textStrings: TextStrings
}

const ResourcesSection : React.FC<ResourcesSectionProps> = ({textStrings}) => {

  const [resources, setResources] = useState<Resource[]>([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/spark/resources')
      .then((response) => {
        let parsedJSON = JSON.parse(response.data)
        if (!response.data) return

        let resources : Resource[] = [] 
        for (let i = 0; i < parsedJSON.length; i++) {
          let resource = parsedJSON[i]
          let resourceFields = resource['fields']
          resources.push(new Resource(resourceFields['name'], resourceFields.description, resourceFields.url, resourceFields.date_added))
        }
        setResources(resources)
      })
  }, [])

  useEffect(() => {
    console.log(resources)
  }, [resources])

  return (
    <div id={`${textStrings.resources}Section`} className='h-screen'>
      <div className={`h-16`}></div>
      {resources.map((resource) => 
        <div>{resource.name}</div>
      )}
    </div>
  )
}

export default ResourcesSection
