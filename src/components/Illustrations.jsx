import React from 'react'

const Illustrations = props => {
  return (
    <main className='max-w-7xl mx-auto mb-20'>
      <h4 className='mb-6 text-brand-gray-1 font-light'>{props.project}</h4>
      <h2 className='mb-12 text-4xl'><span className={props.titleColor}>{props.projectTitle}</span> {props.description}</h2>
      <img src={props.img} alt="Illustrations" />
    </main>
  )
}

export default Illustrations