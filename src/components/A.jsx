import React from 'react'
import useOnline from '../hooks/useOnline'

const A = () => {

  return (
    <div>A - {useOnline() ? '💚' : '🔴'}</div>
  )
}

export default A