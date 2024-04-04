import React from 'react'
import Header from './Header'

const SearchSection = () => {
  const greetingText = "Hi"
  const titleText = "Immigrant Resources Finder"
  const locations = "Grinnell, Tama, Brooklyn"
  const searchPlaceHolderText = "Search by zipcode"

  const resourceButtons = ["Health Care", "Work", "Family"]

  const searchSectionPercent = "70"
  const categoriesSectionPercent = "30"
  return (
    <div id='searchSection' className='w-full h-[100vh] bg-red-400 text-white flex flex-col'>
      <div className={`h-[5vh]`}></div>
      <div className={`w-full flex-1 bg-orange-300`}>
        <div className={`h-3/5 grid place-items-center bg-green-200`}>
          <div className='w-3/5 h-4/5 bg-orange-200 flex flex-col justify-evenly'>
            <div className='w-1/2  bg-yellow-300'> 
            <h1>{titleText}</h1>
            <p>{locations}</p>
            </div>
            <div>
            <input type='search' className='w-full text-slate-400' placeholder={searchPlaceHolderText} />
            </div>
          </div>
        </div>
        <div className={`h-2/5 bg-blue-200 flex justify-evenly items-center`}>
          {resourceButtons.map((categoryName) => 
            <div className='w-1/5 h-4/5 bg-black flex flex-col justify-evenly items-center'>
              <h2>{categoryName}</h2>
              <p className='w-2/5 h-2/5 bg-white'>Category Image</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchSection
