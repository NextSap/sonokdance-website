import React from 'react';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="bg-[#171617] h-full">
            <Navbar/>
            <div
                className="flex flex-col-reverse md:flex-row bg-[#171617] h-full md:h-auto w-full overflow-hidden">
                <div className="h-[50vh] md:h-[90vh] md:w-[50vw]">
                    <img className="h-full w-full object-cover" src={require("../assets/wallpaper.jpg")} alt=""/>
                </div>
                <div className="flex flex-col h-[50vh] md:h-[90vh] md:w-[50vw] justify-center items-center text-white tracking-widest">
                    <div className="duration-300 hover:scale-[1.25] hover:duration-300 text-6xl lg:text-8xl mb-5 space-y-2 text-center mb-10 md:mb-26">
                        <h1>SONO</h1>
                        <h1>K</h1>
                        <h1>DANCE</h1>
                    </div>
                    <p className="">Chantons, dansons et bougeons ensemble.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;