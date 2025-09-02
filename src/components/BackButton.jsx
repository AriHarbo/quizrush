import React, {onClick} from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({backPath}) => {
  return (
    <Link onClick={onClick} to={backPath} className="flex items-center justify-center w-20 h-20 rounded-full 
             bg-yellow-300 text-black shadow-lg 
             hover:bg-yellow-400 
             transition-all duration-300 ease-in-out transform">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </Link>
  )
}

export default BackButton
