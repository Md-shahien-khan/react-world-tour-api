import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Components/Countries/Countries'


function App() {
  return (
    <>
      <h1>React World Tour</h1>
      <h3>We are going to fetch api and show all the data by using React UseState and UseEffect</h3>
      <Countries></Countries>
      
    </>
  )
}

export default App
