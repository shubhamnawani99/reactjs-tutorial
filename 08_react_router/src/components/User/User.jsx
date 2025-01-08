import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const {id} = useParams()
  return (
    <div className='bg-gray-800 text-4xl py-4 text-center text-white'>User: {id}</div>
  )
}