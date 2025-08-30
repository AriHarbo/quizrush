import React from 'react'
import { useState } from 'react'
import HomeContent from '../components/HomeContent'
import BackgroundHome from '../components/BackgroundHome'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <BackgroundHome />
            <HomeContent />
        </div>
  )
}

export default Home
