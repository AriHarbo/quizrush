import React from 'react'

const BackgroundHome = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-55 -left-55 w-160 h-160 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-60"></div>
        <div className="absolute top-50 -left-12 w-110 h-110 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-40"></div>
        <div className="absolute  top-1/6 -right-20 w-80 h-80 bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 rounded-full opacity-50"></div>
        <div className="absolute -bottom-30 -right-10 w-110 h-110 bg-gradient-to-br from-yellow-300 via-cyan-900 to-yellow-400 rounded-full opacity-50"></div>
    </div>
  )
}

export default BackgroundHome
