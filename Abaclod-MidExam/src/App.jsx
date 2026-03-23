import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Success from './pages/Success'

function App() {
  return (
    <>
     <div>
      <NavBar/>
     </div>
     <div className="d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pages/Profile" element={<Profile/>}/>
        <Route path="/pages/SignUp" element={<SignUp/>}/>
        <Route path="/pages/Success" element={<Success/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
