import React from 'react'

const Header = () => {

  const headerTitles = ["Search", "Resources", "About Us"]

  return (
    <div className='flex flex-row fixed left-0 right-0 h-20 pl-[5%] bg-red-600'>
      {headerTitles.map((title) => 
        <div className='w-20 grid items-center'>{title}</div>
      )}
    </div>
  )
}

export default Header
