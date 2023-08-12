import React from 'react'

const Intro = () => {
    return(
        <div className="flex items-center 
        justify-center flex-col  pt-20 pb-6">
            <h1 className="text-6xl md:text-5xl mb-1 md:mb-3 font-bold">Richard Chen</h1>
            <div className="flex flex-row justify-center items-center space-x-20 pt-2 text-xl text-stone-500">
                <a className="hover:underline" href="mailto:richen@mit.edu">email</a>
                <a className="hover:underline" href="https://github.com/ricchen" target="_blank" rel="noreferrer noopener">github</a>
                <a className="hover:underline" href="https://www.linkedin.com/in/richardchen25/" target="_blank" rel="noreferrer noopener">linkedin</a>
            </div>
            <div className="text-2sm max-w-2xl mb-6 align-center p-4 pt-2"> 
                <p className="mt-3 mb-3">
                    Hi! I am an undergraduate at MIT majoring in Computer Science and Engineering and Mathematics.  
                    I'm interested in machine learning and building scalable and efficient software. 
                </p>
                <p> I am currently doing research at MIT CSAIL as part of the FutureTech Group.</p>
                <p className="mb-1 mt-3"> Some classes I have taken include </p>
                <div className="ml-8 mb-3">
                    <ul style={{ listStyleType: 'circle' }}>
                        <li>6.1910 Computation Structures</li>
                        <li>6.1220 Design and Analysis of Algorithms</li>
                        <li>6.3900 Intro to Machine Learning</li>
                        <li>18.404 Theory of Computation</li>
                        <li>18.701 Algebra I</li>
                        <li>18.650 Fundamentals of Statistics</li>
                    </ul>
                </div>
                <p> Feel free to reach out or continue reading more about me!</p>
            </div>
        </div>
    )
}

export default Intro