import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Illustrations from './Illustrations'
import Rafiki from './Rafiki'
import About from './About'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/rafiki" element={<Rafiki />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Main