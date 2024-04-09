import React from 'react'
import { EnglishStrings, FrenchStrings, SpanishStrings, TextStrings } from '../Strings'

interface HeaderProps {
  textStrings: TextStrings,
  setTextStrings: (textStrings : TextStrings) => void,
  scrollToElement: (elementID : string) => void
}
const Header : React.FC<HeaderProps> = ({textStrings, setTextStrings, scrollToElement}) => {

  const headerTitles = [textStrings.search, textStrings.resources, textStrings.contact, textStrings.aboutUs]


  return (
    <div className={`flex flex-row fixed left-0 right-0 h-16 pl-[5%] bg-[#805252] text-white`}>
      <div className='pl-10'></div>
      {headerTitles.map((title) => 
        <h3 onClick={() => scrollToElement(`${title}Section`)} className='w-1/5 grid items-center hover:font-bold hover:cursor-pointer'>{title}</h3>
      )}
      <div className='flex-1 flex justify-end items-center pr-[5%]'>
        <div>
          <h3 onClick={() => setTextStrings(new EnglishStrings())} className='hover:font-bold hover:cursor-pointer inline p-1'>EN</h3>|
          <h3 onClick={() => setTextStrings(new SpanishStrings())} className='hover:font-bold hover:cursor-pointer inline p-1'>ES</h3>|
          <h3 onClick={() => setTextStrings(new FrenchStrings())} className='hover:font-bold hover:cursor-pointer inline p-1'>FR</h3>
        </div>
        </div>
    </div>
  )
}

export default Header
