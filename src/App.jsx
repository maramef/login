import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import SignIn from './components/SignIn'


import './App.css'

function App() {
  const {token, user} = useSelector((state) => state.auth)
  return (
    <Router>
      <Routes>
        {/* Home page is protected */}
        <Route
        path='/'
        element={token ? <Home token={token} user={user} /> : <Navigate to ='/login'/> }
        />
        {/* login page */}
        <Route
        path='/login'
        element={token ? <Navigate to='/' /> : <Login/> }
        />
        <Route
        path='/signin'
        element={token ? <Navigate to='/' /> : <SignIn/> }
        />
      </Routes>
    </Router>

  )
}

export default App