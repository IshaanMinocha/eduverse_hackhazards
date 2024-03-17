import React from 'react'

function About() {
    return (
        <section id='about-section' className="bg-gray-300">
            <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl grid grid-cols-2">
                <div className="font-light text-black ">
                    <h2 className="text-5xl font-semibold font-thinspaced tracking-widest text-gray-900 mb-20">What We Do!</h2>
                    <p className="mb-6 text-2xl text-left">We pioneer education in the metaverse, blending cutting-edge technology with immersive learning experiences. Our platform offers interactive courses, virtual classrooms, and personalized tutoring, empowering learners to excel in a dynamic digital environment. Join us to unlock limitless possibilities and shape the future of education.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-20 ">
                    <img className="w-full rounded-lg h-80" src="/2.webp" alt="1" />
                </div>
            </div>
        </section>
    )
}

export default About