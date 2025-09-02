import React from 'react'
import { useState } from 'react'
import HomeContent from '../components/HomeContent'
import BackgroundHome from '../backgrounds/BackgroundHome.jsx'

const Home = () => {

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <BackgroundHome />
            <HomeContent />
        </div>
  )
}

export default Home
