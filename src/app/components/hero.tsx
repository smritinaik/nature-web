"use client"
import React, { useRef } from 'react'
import { motion , useScroll , useTransform } from "framer-motion";


const Hero = () => {
    const ref = useRef(null);   
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress , [0, 1] ,["10%", "900%"]);


  return (
    <div 
    ref={ref}
    className='w-full h-screen overflow-hidden relative place-items-center'>
  
      <motion.h1 
      style={{y: textY}}
      className='font-bold text-white text-6xl relative z-10 pt-13 '>
         WELCOME
      </motion.h1>
      
      <motion.div
      className='absolute inset-0 z-0'
      style={{
          backgroundImage : `url(/sky.jpg)`,
          backgroundPosition : "center bottom 30%",
          backgroundSize : "cover"
      }}
      />
  
  <div
      className='absolute inset-0 z-20'
      style={{
          backgroundImage : `url(/mountains.png)`,
          backgroundPosition : "bottom",
          backgroundSize : "cover"
      }}
      />
    </div>
  )
}

export default Hero