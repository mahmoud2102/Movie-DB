import React from 'react'
import notFound from '../images/error.png'

export default function NotFount() {
  return (
    <div>
      <img className='w-100 notfound' src={notFound} alt="" />
    </div>
  )
}
