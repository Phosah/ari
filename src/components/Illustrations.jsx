import React from 'react'
import { Link } from 'react-router-dom'

const Illustrations = props => {
  return (
    <main className='max-w-7xl mx-auto pb-20'>
      <h4 className='mb-6 text-brand-gray-1 font-light'>{props.project}</h4>
      <Link to={props.page}><h2 className='mb-12 text-4xl'><span className={props.titleColor}>{props.projectTitle}</span> {props.description}</h2></Link>
      <img src={props.img} alt="Illustrations" />
    </main>
  )
}

export default Illustrations