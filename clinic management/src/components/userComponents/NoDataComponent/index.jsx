import React from 'react'
import { useNavigate } from 'react-router-dom'
const NoDataFound = () => {

    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate('/')
    }
    return (
        <div class="w-full px-16 md:px-0 h-screen flex items-center justify-center">
            <div class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
                <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">No Search Result Found</p>
                <p class="text-gray-500 mt-8 py-2 border-y-2 text-center">
                    <button onClick={handleNavigate}>Go Back to Home Page</button>
                     </p>
                
            </div>
        </div>
    )
}

export default NoDataFound
