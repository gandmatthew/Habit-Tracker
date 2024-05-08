// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Habitat } from './components/Habitat'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      {/* <Home>
        
      </Home> */}
      <div className="container">
        <div className='sticky'>
          <Navbar/>
        </div>

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
    </>
  )
}

export default App
