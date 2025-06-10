import React from 'react'
import { motion } from 'framer-motion'

const DecorationFragment = ({width = 10, height = 80, top, left, right, bottom, rotate = 0, style = {}, delay = 0, motionStyle = {}}) => {
  return (
    <motion.div 
      className='absolute bg-bronze-umbra'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: top ? `${top}px` : 'auto',
        left: left ? `${left}px` : 'auto',
        right: right ? `${right}px` : 'auto',
        bottom: bottom ? `${bottom}px` : 'auto',
        transform: `rotate(${rotate}deg)`,
        ...style,
        ...motionStyle
      }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    />
  )
}

export default DecorationFragment