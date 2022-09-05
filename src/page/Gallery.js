import React from 'react';
import Navbar from "../components/Navbar";

const images = {
    images: [
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg"),
        require("../assets/main_img.jpg")
    ]
}

const Gallery = () => {
    return (
        <div className="h-full">
            <Navbar/>
            <div className="flex bg-[#171617] w-full justify-center">
                <div className="flex flex-wrap justify-around w-[150vh]">
                    {images.images.map(image => {
                        return (
                            <div className="flex p-10">
                                <img className="h-[25vh] hover:scale-125 hover:duration-100 duration-100 object-cover" key={image.indexOf()} src={image} alt=""/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery;