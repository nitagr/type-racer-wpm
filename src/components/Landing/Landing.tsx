import React from "react";
import Typewriter from "typewriter-effect";

import "./Landing.css";
import flash from "./../../assets/hero.jpg";

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <div className="typewriter-container">
                <Typewriter
                  onInit={(typewriter)=> {
                    typewriter
                    .typeString("Fast")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Correct")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Test Now")             
                    .start()
                  }}
                />
                </div>
            </div>
            <div className="landing-right">
                <img
                    data-aos="fade-left"
                    className="flash-image"
                    src={flash}
                    alt="flash"
                />
            </div>
        </div>
    );
};

export default Landing;