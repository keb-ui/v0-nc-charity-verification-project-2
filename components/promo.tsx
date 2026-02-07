"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { Heart, Home, GraduationCap, Leaf, Apple, Building2 } from "lucide-react"

const focusAreas = [
  { icon: GraduationCap, label: "Education" },
  { icon: Home, label: "Housing" },
  { icon: Heart, label: "Healthcare" },
  { icon: Apple, label: "Food Security" },
  { icon: Leaf, label: "Environment" },
  { icon: Building2, label: "Community" },
]

export default function Promo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden py-20"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image 
            src="/images/community-hands-unity.png" 
            fill 
            alt="Community hands together in unity" 
            style={{ objectFit: "cover" }} 
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-white/70 mb-4 tracking-wide">Focus Areas</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Supporting Causes That Matter
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          We verify charities working across key areas that strengthen North Carolina communities, 
          from education and healthcare to environmental protection and food security.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {focusAreas.map((area) => (
            <div 
              key={area.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex flex-col items-center gap-3 hover:bg-white/20 transition-colors duration-300"
            >
              <area.icon className="w-8 h-8 text-white" />
              <span className="text-white font-medium text-sm">{area.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
