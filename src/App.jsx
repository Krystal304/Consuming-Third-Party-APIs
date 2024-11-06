import { useState, useEffect } from 'react'


import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'


import StarshipDetail from './pages/StarshipDetail'



import './App.css'

export default function App() {

  return (
    <div className="App">

   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/starship/:id" element={<StarshipDetail />} />
   </Routes>
   </div>
  )
}

