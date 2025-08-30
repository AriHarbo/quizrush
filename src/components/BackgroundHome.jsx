import React from 'react'

const BackgroundHome = () => {
  return (
    <div>    
        <div class="absolute -top-10 -left-20 md:-top-40 md:-left-40 lg:-top-55 lg:-left-55 
                    w-80 h-80 md:w-100 md:h-100 lg:w-160 lg:h-160 
                    bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 
                    rounded-full opacity-40 md:opacity-50 lg:opacity-60"></div>
        <div class="absolute bottom-40 -left-8 md:top-50 md:-left-12 
                    w-70 h-70 md:w-70 md:h-70 lg:w-110 lg:h-110 
                    bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 
                    rounded-full opacity-30 md:opacity-35 lg:opacity-40"></div>
        
        <div class="absolute top-20 -right-10 md:top-1/4 md:-right-15 lg:top-1/6 lg:-right-20 
                    w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 
                    bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 
                    rounded-full opacity-30 md:opacity-40 lg:opacity-50"></div>
        
        <div class="absolute -bottom-15 -right-10 md:-bottom-20 md:-right-8 lg:-bottom-30 lg:-right-10 
                    w-90 h-90 md:w-80 md:h-80 lg:w-110 lg:h-110 
                    bg-gradient-to-br from-yellow-300 via-cyan-900 to-yellow-400 
                    rounded-full opacity-30 md:opacity-40 lg:opacity-50"></div>
    </div>
  )
}

export default BackgroundHome
