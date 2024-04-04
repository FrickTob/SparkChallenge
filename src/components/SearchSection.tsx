import React from 'react'
import HeaderHeight from '../constants'
import Header from './Header'

const SearchSection = () => {
  const greetingText = "Hi"
  const searchPlaceHolderText = "Search by zipcode"

  const totalSpace = 100 - HeaderHeight
  const searchSectionPercent = 70
  const categoriesSectionPercent = 30
  return (
    <div id='searchSection' className='w-full h-[100vh] bg-red-400 text-white'>
      <div className={`h-[${HeaderHeight}vh]`}></div>
      <div className={`w-full h-[${100 - HeaderHeight}vh] bg-orange-300`}>
        <div className={`h-[${searchSectionPercent}%] grid place-items-center bg-green-200`}>
          <div className='w-3/5 h-4/5 bg-orange-200 flex flex-col justify-between'>
            <h2 className='text-6xl w-fit'>{greetingText}</h2>
            <h4 className='text-2xl w-fit'>Connect with an immigrant community.</h4>
            <input type='search' className='w-full text-slate-400' placeholder={searchPlaceHolderText} />
          </div>
        </div>
        <div className={`h-[${categoriesSectionPercent}%] bg-blue-200`}>

        </div>
        
      </div>
    </div>
  )
}

export default SearchSection
