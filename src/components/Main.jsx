import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Illustrations from './Illustrations'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/illustrations" element={<Illustrations />} />
      </Routes>
    </div>
  )
}

export default Main