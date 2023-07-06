import React from 'react'
import { Link } from 'react-router-dom'

function Failure() {
  return (
    <div class="h-screen flex  justify-center">
    <div class="bg-white p-6 mt-9  md:mx-auto">
    <svg viewBox="0 0 24 24" class="text-red-600 w-16 h-16 mx-auto my-6">
  <path fill="currentColor" d="M11.998,0.013c-6.627,0-11.984,5.358-11.998,11.982C-0.014,19.645,5.342,24.998,11.969,24.998   c6.628,0,11.988-5.358,11.998-11.983C23.986,5.379,18.627,0.016,11.998,0.013z M14.39,17.392l-3.392-3.392l-3.393,3.392   L7.39,14l-3.393-3.392L4,7.607L7.393,4.213L11.785,7.6L15.178,4.207l3.393,3.393L17.572,11L14.39,14.392V17.392z"/>
</svg>

        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Oops Payment Failed!</h3>
            <p class="text-gray-600 my-2">Try Again.</p>
            <p> Have a great day!  </p>
            <div class="py-10 text-center">
                <Link to='/' href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    Go to Home Page
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Failure
