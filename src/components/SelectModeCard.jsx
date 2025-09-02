import React from 'react'

const SelectModeCard = ({selectText, selectPath, bgClass}) => {
  return (
    <div className={`z-40 w-72 md:w-100 sm:w-56 aspect-square ${bgClass} 
              rounded-4xl shadow-lg p-4 sm:p-6 md:p-6 
              flex flex-col items-center justify-center text-center 
              border-8 border-white cursor-pointer 
              transition duration-300 ease-in-out
              hover:shadow-xl hover:scale-105 group`}>
        <div className="flex items-center justify-center mb-4">
            {/* Ejemplo con ícono svg */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
            <path strokeLinecap="round" strokeLinejoin="round" d={selectPath} />
            </svg>
        </div>

        {/* Texto abajo */}
        <h1 style={{ fontFamily: '"Fredoka", cursive' }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">{selectText}</h1>
    </div>
  )
}

export default SelectModeCard
