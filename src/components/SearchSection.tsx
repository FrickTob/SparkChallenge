import React from 'react'

const SearchSection = () => {
  const greetingText = "Hi"
  const searchPlaceHolderText = "Search by zipcode"
  return (
    <div id='searchSection' className='w-full h-[100vh] grid place-items-center bg-red-400 text-white'>
      <div className='w-[50%]'>
        <h2 className='text-6xl w-fit'>{greetingText}</h2>
        <h4 className='text-2xl w-fit'>Connect with an immigrant community.</h4>
        <input type='search' className='w-full text-slate-400' placeholder={searchPlaceHolderText} />
      </div>
    </div>
  )
}

export default SearchSection
