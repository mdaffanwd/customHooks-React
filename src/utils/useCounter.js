import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

  return {count, increment, decrement};
}

export default useCounter