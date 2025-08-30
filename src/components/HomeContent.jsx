import React from 'react'
import { Link } from 'react-router-dom'

const HomeContent = () => {
  return (
        <div className="relative isolate px-4 pt-10 lg:px-8 min-h-screen flex items-center justify-center z-50">
        <div className="mx-auto w-full max-w-2xl md:max-w-4xl flex flex-col justify-center 
                    py-6 md:py-8 px-6 md:px-12 bg-white/80 md:bg-white/70 rounded-xl md:rounded-2xl 
                    border border-gray-200 shadow-md md:shadow-lg text-center">
            
            <h1 style={{ fontFamily: '"Fredoka", cursive' }} className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight 
                    bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-600 
                    bg-clip-text text-transparent">
                QuizRush
            </h1>

            <p style={{ fontFamily: '"Fredoka", cursive' }} className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
                Your Ultimate Trivia Challenge Awaits!
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Link to="/select-mode" style={{ fontFamily: '"Fredoka", cursive' }} className="flex items-center justify-center gap-2 w-full sm:w-40 rounded-full bg-yellow-500 py-2.5 text-sm font-semibold text-black shadow-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    Play
                </Link>
                <Link to="/rankings" style={{ fontFamily: '"Fredoka", cursive' }} className="flex items-center justify-center gap-2 w-full sm:w-40 rounded-full bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                    </svg>
                    Ranking
                </Link>
                <Link href="#" style={{ fontFamily: '"Fredoka", cursive' }} className="flex items-center justify-center gap-2 w-full sm:w-40 rounded-full bg-sky-900 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Account
                </Link>
            </div>

        </div>
    </div>

  )
}

export default HomeContent
