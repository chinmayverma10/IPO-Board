import React from 'react'

function Banner({ text }) {
    return (
        <div className=' bg-gray-600'>
            <div className='mx-auto w-4/5 h-60 bg-black justify-center rounded-full'>
                <h1 className='text-center font-extrabold text-8xl mt-12 text-white'>IPO Board</h1>
                <p className='text-center text-3xl text-white'>{ text }</p>
            </div>
        </div>
    )
}

export default Banner