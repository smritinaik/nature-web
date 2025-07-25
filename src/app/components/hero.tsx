"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";


const Hero = () => {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sunY = useTransform(scrollYProgress, [0, 1], ["10%", "990%"]);


  return (
    <div
      ref={ref}
      className='w-full h-screen overflow-hidden justify-center relative place-items-center'>

      <motion.img
        src="/sun.png"
        alt="Sun"
        style={{ y: sunY }}
        className='absolute z-10 top-8 left-1/2 transform -translate-x-1/2 w-45 h-45'
      />

      <motion.div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(/bg.jpg)`,
          backgroundPosition: "center bottom 40%",
          backgroundSize: "cover"
        }}
      />

      <div
        className='absolute inset-0 z-20 '
        style={{
          backgroundImage: `url(/mountain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover"
        }}
      />
      
    </div>
  )
}

export default Hero