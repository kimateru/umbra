import React from 'react'
import { motion } from 'framer-motion'

const DecorationFragment = ({ className = '', delay = 0, motionStyle = {} }) => {
  return (
    <motion.div
      className={`bg-bronze-umbra absolute ${className}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      style={motionStyle}
    />
  )
}

export default DecorationFragment