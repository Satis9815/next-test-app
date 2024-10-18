import React from 'react'

const Card = ({children}) => {
  return (
    <div className='p-4 shadow-lg flex items-center justify-center  h-32 w-32'>
      {children}
    </div>
  )
}

export default Card
