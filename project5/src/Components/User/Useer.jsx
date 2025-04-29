import React from 'react'
import { useParams } from 'react-router-dom'
function Useer() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-600 w-1/2 ml-40 text-white justify-center flex flex-fixed'>
      User:{userId}
    </div>
  )
}

export default Useer
