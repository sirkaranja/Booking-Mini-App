import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './Components/Navbar/Navbar'
import TravelBookingForm from './Components/Coursel/Coursel'
import Explore_tours from './Components/Tours/Tours'
function App() {
  return (
    <>
    <NavigationBar />
    <TravelBookingForm />
    < Explore_tours/>
    </>
  )
}

export default App
