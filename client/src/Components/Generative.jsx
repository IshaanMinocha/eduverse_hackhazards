import React from 'react'

function Generative() {
    return (
        <>
            <h1 className="mt-10 ml-20 text-7xl">Generative AI</h1>
            <div className="grid grid-cols-1">
                <a href="" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-2xl m-10 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 duration-200 hover:scale-110">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="gen1.webp" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prompt to Text Generation</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Solve your doubts using chatbot</p>
                    </div>
                </a>
                <a href="" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl m-10 duration-200 hover:scale-110 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="gen3.jpg" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image to description Generation</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Get information about the inputted image</p>
                    </div>
                </a>
                <a href="" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl m-10 duration-200 hover:scale-110 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="gen2.webp" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prompt to 3D Generation</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">3D models from text at your disposal</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Generative