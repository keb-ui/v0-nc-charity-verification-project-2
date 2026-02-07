"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Header from "./header"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div ref={container} className="h-screen overflow-hidden relative">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/nc-mountain-landscape.png"
          fill
          alt="Aerial view of North Carolina mountain landscape"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="text-left text-white max-w-2xl px-6 md:px-12 lg:px-20">
            <p className="text-sm md:text-base text-white/80 mb-4 tracking-wide">Student-Led Initiative</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              NC Charity Verification Project
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-white/90 max-w-xl">
              Helping individuals and organizations identify trustworthy charities across North Carolina. 
              Make informed donations and strengthen local communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#charities" 
                className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90 cursor-pointer text-center"
              >
                Explore Charities
              </a>
              <a 
                href="#mission" 
                className="px-6 py-3 border-2 border-white bg-transparent text-white font-medium text-sm transition-all duration-300 hover:bg-white hover:text-foreground cursor-pointer text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
