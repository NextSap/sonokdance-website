import React from 'react';
import Navbar from "../components/Navbar";

const whyUsList = {
    "items": [
        {
            "key": 1,
            "description": <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at blanditiis
                debitis delectus dignissimos illum, maxime modi odio quae rem reprehenderit voluptatum? Aliquid debitis
                dicta dignissimos dolor, dolores ea earum eius fuga fugit, in iusto minus molestiae nihil, nisi nostrum
                officiis omnis praesentium quam rem reprehenderit suscipit veniam veritatis voluptatibus. Aliquam
                aperiam architecto asperiores dolorem doloremque ea earum eos est facere, hic illum laborum neque
                nesciunt nostrum officia porro praesentium quibusdam recusandae reprehenderit sequi similique suscipit
                tempora totam velit voluptas voluptatem voluptatibus? Cum cumque ducimus eum ex id maiores
                necessitatibus neque officia perspiciatis provident, quas, quis, recusandae repudiandae veritatis.</h1>,
            "image": require("../assets/main_img.jpg")
        },
        {
            "key": 2,
            "description": <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at blanditiis
                debitis delectus dignissimos illum, maxime modi odio quae rem reprehenderit voluptatum? Aliquid debitis
                dicta dignissimos dolor, dolores ea earum eius fuga fugit, in iusto minus molestiae nihil, nisi nostrum
                officiis omnis praesentium quam rem reprehenderit suscipit veniam veritatis voluptatibus. Aliquam
                aperiam architecto asperiores dolorem doloremque ea earum eos est facere, hic illum laborum neque
                nesciunt nostrum officia porro praesentium quibusdam recusandae reprehenderit sequi similique suscipit
                tempora totam velit voluptas voluptatem voluptatibus? Cum cumque ducimus eum ex id maiores
                necessitatibus neque officia perspiciatis provident, quas, quis, recusandae repudiandae veritatis.</h1>,
            "image": require("../assets/main_img.jpg")
        },
        {
            "key": 3,
            "description": <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at blanditiis
                debitis delectus dignissimos illum, maxime modi odio quae rem reprehenderit voluptatum? Aliquid debitis
                dicta dignissimos dolor, dolores ea earum eius fuga fugit, in iusto minus molestiae nihil, nisi nostrum
                officiis omnis praesentium quam rem reprehenderit suscipit veniam veritatis voluptatibus. Aliquam
                aperiam architecto asperiores dolorem doloremque ea earum eos est facere, hic illum laborum neque
                nesciunt nostrum officia porro praesentium quibusdam recusandae reprehenderit sequi similique suscipit
                tempora totam velit voluptas voluptatem voluptatibus? Cum cumque ducimus eum ex id maiores
                necessitatibus neque officia perspiciatis provident, quas, quis, recusandae repudiandae veritatis.</h1>,
            "image": require("../assets/main_img.jpg")
        }
    ]
}

const WhyUs = () => {
    return (
        <div className="bg-[#171617] h-full text-white">
            <Navbar/>
            <div className="flex flex-col items-center justify-center mt-5 bg-[#171617]">
                <h1 className="text-xl lg:text-6xl md:text-4xl tracking-wider md:mb-5 mb-0 scale-100 duration-300 hover:scale-125 hover:duration-300">POURQUOI
                    SONO K DANCE ?</h1>
                <div className="flex flex-col w-[90%] items-center">
                    {whyUsList.items.map(item => {
                        return (
                            <div key={item.key}
                                 className="flex flex-col lg:flex-row justify-between items-center w-[50vh] md:[75vh] lg:w-[100vh]">
                                <img alt="" className={"flex bg-cover h-[30vh] mt-10 mb-10"} src={item.image}/>
                                <div className="flex flex-col mt-10 mb-10">
                                    <p className="ml-8 mr-8 text-center lg:text-left">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyUs;