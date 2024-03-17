import React from 'react'

function Visualization() {
    return (
        <>
            <h1 className="m-10 text-7xl">Classroom Visualization</h1>
            <div className="w-screen h-screen m-10">
            <iframe src="https://www.spatial.io/embed/EduVerse-Classes-655c8e28c41d46b41c94c3e3?share=0" width="1280px" height="720px" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"></iframe>   
            </div>
            <h1 className="m-10 mt-40 text-7xl">Lab Visualization</h1>
            <div className="w-screen h-screen m-10 mb-40">
            <iframe src="https://www.spatial.io/embed/EduVerse-Labs-655c95ec0c7d964cc5e3a6c9?share=8809467772204448378" width="1280px" height="720px" allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"></iframe>    
            </div>
        </>
    )
}

export default Visualization
