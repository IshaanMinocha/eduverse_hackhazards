import React from 'react';

function Marketplace() {
    return (
        <>
            <h1 className="mt-10 ml-20 text-7xl">Augmented Reality Learning</h1>
            <div className=" flex flex-wrap sm:grid sm:grid-cols-2 p-20">
                <Product title="Military Radio" price="A military radio is a specialized communication device used by armed forces for secure and reliable voice and data transmission in the battlefield. It is designed to withstand harsh environments, operate over long distances, and employ encryption to prevent unauthorized interception of sensitive information." image="military_radio.glb" />
                <Product title="Rutherford Model" price="Rutherford's model shows that an atom is mostly empty space, with electrons orbiting a fixed, positively charged nucleus in set path." image="rutherford.glb" />
                <Product title="Humain Brain Model" price="The human brain 3D model showcases the intricate network of neurons and synapses that enable cognition and control of bodily functions. It provides a visual representation of the complexity and functionality of the brain's structure, aiding in understanding neuroscience and medical education." image="mod_hum_brain.glb" />
                <Product title="Human Body" price="Explore the intricate vascular tissues and dynamic animations in our 3D model, revealing the circulatory system's inner workings. Dive into the muscular level to understand muscle fibers, tendons, and contraction mechanisms, providing a comprehensive view of human physiology and anatomy in action." image="human_insides.glb" />
            </div>
        </>
    );
}

export default Marketplace;

function Product(props) {
    return (
        <>
            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
                    <model-viewer
                        src={props.image || 'logo.png'}
                        style={{
                            width: '80%',
                            margin: "20px auto 20px auto",
                            height: '400px',
                            backgroundColor: '#3d35b1',
                            '--poster-color': '#ffffff00',
                        }}
                        ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                        poster="logo.png"
                        alt="mgcms"
                        shadow-intensity="1"
                        camera-controls
                        auto-rotate
                        ar
                    />
                <div className="px-5 pb-5">
                        <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <div className="grid grid-cols-1 items-center justify-between m-3">
                        <span className="text-xl font-bold text-gray-900 dark:text-white my-2">Desc: <span className="text-sm">{props.price}</span></span>
                        <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 my-2">View in Ar</a>
                    </div>
                </div>
            </div>
        </>
    );
}
