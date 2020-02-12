// src: https://www.youtube.com/watch?v=rYdt26s11NQ&list=PLIvCYh5AD3HxWRGnkAcmXsyu0Df08s1AW&index=3
import { useEffect, useState } from 'react'

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}

export default useMousePosition
