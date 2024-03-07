import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResourcesSection from './components/ResourcesSection';
import AboutUsSection from './components/AboutUsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='h-20 bg-transparent'></div>
      <SearchSection />
      <ResourcesSection />
      <AboutUsSection />
    </div>
  );
}

export default App;
