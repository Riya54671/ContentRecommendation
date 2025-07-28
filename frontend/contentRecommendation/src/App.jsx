import React from 'react'
import "./App.css"
import LandingPage from './LandingPage'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Profile from './Profile'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
 
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
   </Routes>
  </BrowserRouter>
  )
}

export default App
