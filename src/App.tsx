import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResourcesSection from './components/ResourcesSection';
import AboutUsSection from './components/AboutUsSection';
import { EnglishStrings, TextStrings } from './Strings';

function App() {
  let [textStrings, setTextStrings]= useState<TextStrings>(new EnglishStrings());

  let scrollToElement = (elementID : string) => {
    let element = document.getElementById(elementID);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <Header textStrings={textStrings} scrollToElement={scrollToElement} setTextStrings={(textString : TextStrings) => setTextStrings(textString)}/>
      <SearchSection textStrings={textStrings} />
      <ResourcesSection textStrings={textStrings} />
      <AboutUsSection textStrings={textStrings} />
    </div>
  );
}

export default App;
