import React from 'react'

function Hero() {
    return (
        <>
            <div className="bg-[url('bg.webp')] h-[75vh] bg-no-repeat bg-cover text-white bg-gray-700 bg-blend-multiply">
                <h1 className='text-7xl text-center pt-24 font-boldhead tracking-wider'>
                    Eduverse
                </h1>
                <h2 className='text-5xl text-center my-5 font-thinspaced tracking-wider'>
                edtech reimagined
                </h2>
                <p className='text-xl text-center my-5 pt-10 px-40'>
                    Designing Realities, Building Dreams                </p>
                <div className="flex space-x-4 justify-center">
                    <a href="#about-section" className="text-white duration-300 bg-black rounded-full font-semibold m-2 p-3 px-10 hover:bg-transparent border-2 border-black">Enter Eduverse</a>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center scroll-smooth">
                <a href="#about-section">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto my-10 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero