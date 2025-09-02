import React from 'react'

const BackgroundSelectMode = () => {
  return (
    <div>
      <div className="absolute  
                    w-50 h-50 md:w-50 md:h-50 lg:w-60 lg:h-60 
                    bg-yellow-400 
                    rounded-full
                    top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    lg:-translate-x-[50%] lg:-translate-y-[50%]">
        </div>
      <div className="absolute  
                     md:w-50 md:h-50 lg:w-80 lg:h-80 
                    bg-amber-200 
                    rounded-full
                    top-1/2 left-1/2 
                    -translate-x-[90%] lg:-translate-y-[10%]
                    lg:-translate-x-[160%] lg:-translate-y-[-10%]">
        </div>
      <div className="absolute  
                    w-70 h-70 md:w-50 md:h-50 lg:w-90 lg:h-90 
                    bg-amber-400 
                    rounded-full
                    -bottom-20 -right-20
                    ">
        </div>
        <div className="absolute  
                    w-50 h-50 md:w-50 md:h-50 lg:w-60 lg:h-60 
                    bg-yellow-400 
                    rounded-full
                    -top-20 -right-20
                    ">
        </div>
        <div className="absolute  
                    w-50 h-50 md:w-50 md:h-50 lg:w-60 lg:h-60 
                    bg-amber-400 
                    rounded-full
                    top-40 -left-20
                    ">
        </div>
    </div>
  )
}

export default BackgroundSelectMode
