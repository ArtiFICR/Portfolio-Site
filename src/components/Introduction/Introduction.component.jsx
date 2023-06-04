import React from "react";

import ComputerAnimation from "../../assets/computeranimation.gif";

import "./introduction.css";

const Introduction = () => {
    return(
        <div className="introductionContainer">
            <h1 className="nameContainer">Blake Bowser</h1>
            <img src={ComputerAnimation} alt="computer gif" className="introductionImage"></img>
            <h3 className="titleContainer">Full Stack Developer</h3>
            <p className="introductionText">Hello, I’m Blake, a full-stack developer from the United States with a strong passion for Web3 and new technologies.</p>
        </div>
    )
}

export default Introduction;