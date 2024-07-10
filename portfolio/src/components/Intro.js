import React from 'react'

function Intro() {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
            <h1 className='text-white'>Hi , I am</h1>
            <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Sudhanshu Ranjan</h1>
            <h1 className='text-6xl sm:text-3xl text-white font-semibold'>I am Building Portfolio using MERN</h1>
            <p className='text-white' >I love programing and web Development. To Become a successful expert in the field of web development and network Associate by gaining my technical knowledge </p>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded gap-8'>Start</button>
        </div>
    )
}

export default Intro