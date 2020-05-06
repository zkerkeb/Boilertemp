import React, { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const Animation = () => {
  const [animate, setAnimate] = useState('initial')
  const animationTimeout = useRef(null)

  useEffect(() => {
    animationTimeout.current = setTimeout(() => {
      console.log('test', animate)
      setAnimate(animate === 'initial' ? 'animated' : 'initial')
    }, 2500)
    return () => {
      clearTimeout(animationTimeout.current)
    }
  }, [animate])

  return (
    <Container>
      <Square
        variants={variantSquare}
        initial='initial'
        animate='animated'
      ></Square>
      <Square variants={variantSquare} animate={animate}></Square>
    </Container>
  )
}

const variantSquare = {
  initial: { x: 0, transition: { duration: 2 } },
  animated: { x: 300, transition: { duration: 2 } },
  animatedMid: { x: 300, transition: { duration: 2 } }
}

const Container = styled.div`
  padding: 24px;
`

const Square = styled(motion.div)`
  height: 50px;
  width: 50px;
  background-color: red;
`

export default Animation
