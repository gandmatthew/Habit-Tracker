import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { createBrowserRouter } from 'react-dom'

// const router = createBrowserRouter([
//   {path}
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
