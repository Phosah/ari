import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Rafiki from './Rafiki'
import About from './About'
import Projects from './Projects'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/rafiki" element={<Rafiki />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Main