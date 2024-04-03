import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResourcesSection from './components/ResourcesSection';
import AboutUsSection from './components/AboutUsSection';

function App() {

  let scrollToElement = (elementID : string) => {
    let element : HTMLElement | null = null;
    if (elementID === "Search") {
      element = document.getElementById("searchSection");
    } else if (elementID === "Resources") {
      element = document.getElementById("resourcesSection");
    } else if (elementID === "About Us") {
      element = document.getElementById("aboutUsSection");
    }
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <Header scrollToElement={scrollToElement}/>
      <SearchSection />
      <ResourcesSection />
      <AboutUsSection />
    </div>
  );
}

export default App;
