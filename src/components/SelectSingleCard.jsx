import React from 'react'

const SelectSingleCard = ({iconCard, iconColor , bgCard , bgIconColor, tittleCard, textCard  }) => {
  return (
    <div className={`z-40 ${bgCard} cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out
              hover:shadow-xl hover:scale-105
              w-40 sm:w-84 md:w-60 lg:w-56`}>
        {/* Icono */}
        <div className={`${bgIconColor} rounded-full w-20 h-20 lg:w-22 lg:h-22 flex items-center justify-center mb-4`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={iconColor} className="w-10 h-10 lg:w-12 lg:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconCard} />
            </svg>
        </div>
       

        {/* Título */}
        <h2 style={{ fontFamily: '"Fredoka", cursive' }} className="text-2xl lg:text-3xl font-bold mb-2 text-white">
            {tittleCard}
        </h2>

        {/* Descripción */}
        <p style={{ fontFamily: '"Fredoka", cursive' }} className="text-xl text-white hidden sm:block">
            {textCard}
        </p>
    </div>
  )
}

export default SelectSingleCard
