import React from 'react'
import useOnline from '../hooks/useOnline'

const B = () => {
    
  return (
    <div>B - {useOnline() ? 'Online' : 'Offline'}</div>
  )
}

export default B