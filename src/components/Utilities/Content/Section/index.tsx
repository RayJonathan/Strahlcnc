import React from 'react'
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400'
})

function Section() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg-home.png')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col items-start justify-center h-full text-center pl-4 sm:pl-8 md:pl-16 lg:pl-32 text-white">
        <h1 className={`${audiowide.className} text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold`}>STRAHL</h1>
        <p className={`${audiowide.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold`}>LEAVE IT TO US</p>
      </div>
    </div>
  )
}

export default Section
