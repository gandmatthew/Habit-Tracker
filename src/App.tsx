// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Habitat } from './components/Habitat'
import { Footer } from './components/Footer'
import { Login, UserContext } from './pages/Login'
import { Home } from './pages/Home'
import { useContext, useEffect, useState } from 'react'

function App() {
  const isLoggedin = useContext(UserContext)

  function test() {
    console.log(isLoggedin)
  }

  return (
    <>
      <button onClick={test}>Hello</button>
      {isLoggedin ?

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

        :

        <Home>
        </Home>
      
      }
    </>
  )
}

export default App
