import React from 'react'
import Header from './Header'
import {TextStrings } from '../Strings'

interface SearchSectionProps {
  textStrings: TextStrings
}

const SearchSection : React.FC<SearchSectionProps> = ({textStrings}) => {
  const greetingText = "Hi"
  const titleText = "Immigrant Resources Finder"
  const locations = "Grinnell, Tama, Brooklyn"
  const searchPlaceHolderText = "Search by zipcode"

  const resourceButtons = [textStrings.healthCare, textStrings.work, textStrings.family]

  const searchSectionPercent = "70"
  const categoriesSectionPercent = "30"
  return (
    <div id={`${textStrings.search}Section`} className='w-full h-[100vh] bg-red-400 flex flex-col text-[#9c7979]'>
      <div className={`h-16`}></div>
      <div className={`w-full flex-1`}>
        <div className={`h-[70%] grid place-items-center bg-gray-200`}>
          <div className='w-3/5 h-4/5 flex flex-col justify-evenly'>
            <div className='w-1/2 rounded-2xl flex flex-col justify-center items-start p-6  bg-white'> 
            <h1>{textStrings.homeText}</h1>
            <h4>{textStrings.locations}</h4>
            </div>
            <div>
            <input type='search' className='w-full text-slate-400' placeholder={textStrings.searchPlaceholder} />
            </div>
          </div>
        </div>
        <div className={`h-[30%] bg-[#ed6b6b] flex justify-evenly items-center`}>
          {resourceButtons.map((categoryName) => 
            <div className='w-1/5 h-4/5 bg-white rounded-3xl flex flex-col justify-evenly items-center'>
              <h2>{categoryName}</h2>
              <p className='w-2/5 h-2/5 bg-white bg-[#9c7979]'>Category Image</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchSection
