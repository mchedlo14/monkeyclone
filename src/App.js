import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textcontent from './components/TextContent/Textcontent';
import Timecontent from './components/TimeContent/Timecontent';


const App = () => {
  return (
    <main className='App'>
      <Navbar />
      <Timecontent />
      <Textcontent />
    </main>
  )
}

export default App