// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Habitat } from './components/Habitat'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div>
        <div className='sticky'>
          <Navbar/>
        </div>
        <div>
          <div className='center-habitat'>
            <Habitat/>
          </div>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
