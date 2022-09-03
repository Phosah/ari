import React from 'react'
// import illustrations1 from "../assets/illustrations-1.png"

const Illustrations = props => {
  return (
    <main className='max-w-7xl mx-auto my-20'>
      <h4 className='mb-4 text-sm'>{props.project}</h4>
      <h2 className='mb-4 text-4xl'>{props.description}</h2>
      <img src={props.img} alt="Illustrations" />
    </main>
  )
}

export default Illustrations