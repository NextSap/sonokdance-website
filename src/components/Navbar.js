import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const style = {
    buttonBase: "h-[1.5px] w-5 bg-white mb-1.5 ",
    ulVisible: "flex mr-6 mb:mr-16 space-x-4 mb:space-x-8 text-xs text-white text-center",
    ulInvisible: "invisible",
    ulButton: "flex absolute w-full h-full mt-96 bg-gray-500 duration-300 flex-col space-y-5 text-white text-center justify-center align-center z-10",
    ulNormal: "flex mr-6 mb:mr-16 space-x-4 mb:space-x-8 text-xs text-white text-center duration-0"
};


const Navbar = () => {
    const [buttonVisible, setButtonVisible] = useState(document.body.clientWidth < 768);
    const [ulButtonActive, setUlButtonActive] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (document.body.clientWidth < 768) {
                setButtonVisible(true);
                if (ulButtonActive ? document.getElementById("ul").className = style.ulButton : document.getElementById("ul").className = style.ulInvisible) ;
            } else {
                setButtonVisible(false);
                setUlButtonActive(false)
                document.getElementById("ul").className = style.ulNormal;
            }
        });
    })

    return (
        <div className="h-[10%] w-full flex items-center justify-between border-b-[0.5px] bg-black">
            <img onClick={() => {window.location.replace("/")}} className="w-[10vh] md:w-[17vh] bg-cover cursor-pointer" src={require("../assets/logo.png")} alt=""/>
            <ul id="ul"
                className={buttonVisible ? (ulButtonActive ? style.ulButton : style.ulInvisible) : style.ulNormal}>
                <NavLink to={"/"} className={activePage("/")}>
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to={"/whyus"} className={activePage("whyus")}>
                    <li>POURQUOI NOUS ?</li>
                </NavLink>
                <NavLink to={"/gallery"} className={activePage("gallery")}>
                    <li>GALERIE</li>
                </NavLink>
                <NavLink to={"/contact"} className={activePage("contact")}>
                    <li>CONTACT</li>
                </NavLink>
            </ul>
            <button onClick={() => {
                setUlButtonActive(!ulButtonActive);
                if (ulButtonActive ? document.getElementById("ul").className = style.ulVisible : document.getElementById("ul").className = "invisible") ;
            }}
                    className="visible md:invisible h-auto w-auto z-10 absolute right-8 cursor-pointer">
                <div
                    className={style.buttonBase + (ulButtonActive ? "rotate-[135deg] translate-y-[0.45rem] duration-300" : "")}/>
                <div className={style.buttonBase + (ulButtonActive ? "invisible" : "")}/>
                <div
                    className={style.buttonBase + (ulButtonActive ? "rotate-[-135deg] -translate-y-[0.45rem] duration-300" : "")}/>
            </button>
        </div>
    );
};

const checkActive = (match) => {
    if (match === "/")
        return document.URL.charAt(document.URL.length - 1) === match;
    return document.URL.split("/")[document.URL.split("/").length - 1] === match;
};

const activePage = (match) => {
    if (checkActive(match))
        return "text-yellow-200";
    return "text-white hover:text-gray-300";
}


export default Navbar;