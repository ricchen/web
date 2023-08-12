import React, { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Timeline from './components/Timeline'

import './styles/tailwind.css'

function App() {
  
  return (
    <div className="bg-slate-100">
      <Intro />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
