import React from 'react'

function Navbar() {
    return (
        <nav className="bg-purple-700 p-1 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo text-white text-2xl font-bold">Eduverse</div>
                {/* <div class="text-4xl font-extrabold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600">
                        Logo
                    </span>
                </div> */}

                <div className="flex space-x-4">
                    <a href="/" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Home</a>
                    <a href="/generative" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Generative AI</a>
                    <a href="/arlearning" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">AR Learning</a>
                    <a href="/visualization" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">VR Visualization</a>
                    <a href="/transactions" className="text-white font-semibold m-2 p-3 text-lg duration-200 hover:opacity-80">Transactions</a>
                    <a href="#" className="text-white border-solid rounded-full border-2 border-black font-semibold m-2 p-3 text-lg duration-200 hover:bg-black">LMS</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar