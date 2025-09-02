import React from 'react'

const BackgroundHome = () => {
  return (
    <div>    
        <div className="absolute -top-10 -left-20 md:-top-40 md:-left-40 lg:-top-55 lg:-left-55 
                    w-80 h-80 md:w-100 md:h-100 lg:w-160 lg:h-160 
                    bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 
                    rounded-full opacity-40 md:opacity-50 lg:opacity-60"></div>
        <div className="absolute bottom-40 -left-8 md:top-50 md:-left-12 
                    w-70 h-70 md:w-70 md:h-70 lg:w-110 lg:h-110 
                    bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 
                    rounded-full opacity-30 md:opacity-35 lg:opacity-40"></div>
        
        <div className="absolute top-20 -right-10 md:top-1/4 md:-right-15 lg:top-1/6 lg:-right-20 
                    w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 
                    bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 
                    rounded-full opacity-30 md:opacity-40 lg:opacity-50"></div>
        
        <div className="absolute -bottom-15 -right-10 md:-bottom-20 md:-right-8 lg:-bottom-30 lg:-right-10 
                    w-90 h-90 md:w-80 md:h-80 lg:w-110 lg:h-110 
                    bg-gradient-to-br from-yellow-300 via-cyan-900 to-yellow-400 
                    rounded-full opacity-30 md:opacity-40 lg:opacity-50"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="absolute top-10 left-10 md:left-40 lg:left-90 w-24 h-24 z-40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="absolute bottom-40 md:left-40 md:bottom-20 lg:left-40 lg:bottom-20 size-20 z-40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="absolute top-60 lg:top-80 lg:left-20 size-24 z-40 stroke-amber-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-55 right-1 lg:top-35 lg:right-60 size-24 z-40 stroke-indigo-900">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-5 right-30 lg:bottom-5 lg:right-80 size-24 z-40 stroke-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-5 right-10 lg:top-5 lg:right-110 size-24 z-40 stroke-orange-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
    </div>
  )
}

export default BackgroundHome
