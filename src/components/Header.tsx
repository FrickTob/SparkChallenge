import React from 'react'

interface HeaderProps {
  scrollToElement: (elementID : string) => void
}
const Header : React.FC<HeaderProps> = ({scrollToElement}) => {

  const headerTitles = ["Search", "Resources", "Contact", "About Us"]


  return (
    <div className={`flex flex-row fixed left-0 right-0 h-[5vh] pl-[5%] bg-red-600`}>
      {headerTitles.map((title) => 
        <div onClick={() => scrollToElement(title)} className='w-1/5 grid items-center hover:font-bold hover:cursor-pointer'>{title}</div>
      )}
      <div className='flex-1 flex justify-end items-center pr-[5%]'>
        <p><span className='hover:font-bold'>EN</span>|<span className='hover:font-bold'>ES</span>|<span className='hover:font-bold'>FR</span></p>
        </div>
    </div>
  )
}

export default Header
