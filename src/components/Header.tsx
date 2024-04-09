import React from 'react'
import { EnglishStrings, FrenchStrings, SpanishStrings, TextStrings } from '../Strings'

interface HeaderProps {
  textStrings: TextStrings,
  setTextStrings: (textStrings : TextStrings) => void,
  scrollToElement: (elementID : string) => void
}
const Header : React.FC<HeaderProps> = ({textStrings, setTextStrings, scrollToElement}) => {

  const headerTitles = [, textStrings.resources, textStrings.contact, textStrings.aboutUs]


  return (
    <div className={`flex flex-row fixed left-0 right-0 h-[5vh] pl-[5%] bg-red-600`}>
      {headerTitles.map((title) => 
        <div onClick={() => scrollToElement(title!)} className='w-1/5 grid items-center hover:font-bold hover:cursor-pointer'>{title}</div>
      )}
      <div className='flex-1 flex justify-end items-center pr-[5%]'>
        <p>
          <span onClick={() => setTextStrings(new EnglishStrings())} className='hover:font-bold hover:cursor-pointer'>EN</span>|
          <span onClick={() => setTextStrings(new SpanishStrings())} className='hover:font-bold hover:cursor-pointer'>ES</span>|
          <span onClick={() => setTextStrings(new FrenchStrings())} className='hover:font-bold hover:cursor-pointer'>FR</span></p>
        </div>
    </div>
  )
}

export default Header
