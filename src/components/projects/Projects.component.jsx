import React from "react";

import PokeLogo from "../../assets/pokecoin.png"
import OctusLogo from "../../assets/octusicon.png";
import DataAnimation from "../../assets/dataanimation.gif";
import ParaboxLogo from "../../assets/paraboxlogo.png";

import "./projects.css";

const Projects = React.forwardRef(({ innerRef }, prop) => {
    return(
        <div ref={innerRef} className="projectContainer">
            <h2 className="projectHeader">Projects:</h2>
            <div className="projectOneContainer">
                <a href="https://askabot.vercel.app/" target="_blank" className="anchorContainer">
                    <img src={DataAnimation} alt="robot" className="cardLogo"></img>
                    <span className="borderLine" />
                    <p className="projectTitle">Ask-A-Bot</p>
                    <p className="projectDescription">This is basic chatbot that's powered by gpt3 api and react that uses express to pass calls between the front end to the api and retrieves the response from gpt3 to display to the client</p>
                </a>
            </div>
            <div className="projectTwoContainer">
                <a href="https://github.com/ArtiFICR/Pokemart-Online" target="_blank" className="anchorContainer">
                    <img src={PokeLogo} alt="pokecoin" className="cardLogo"></img>
                    <span className="borderLine" />
                    <p className="projectTitle">Pokemart Online</p>
                    <p className="projectDescription">This is an online e-commerce website that simulates an online pokemart website from the game pokemon and uses firebase to manage logins and user data while using react for the UI</p>
                </a>
            </div>
            <div className="projectThreeContainer">
                <a href="https://github.com/ArtiFICR/Octus-Mod-Bot" target="_blank" className="anchorContainer">
                    <img src={OctusLogo} alt="octus" className="cardLogo"></img>
                    <span className="borderLine" />
                    <p className="projectTitle">Octus Discord Bot</p>
                    <p className="projectDescription">This is a discord moderator bot written in python that has basic moderation abilities such as muting, banning, and warning users along with the option to play a couple of games within discord such as blackjack and a coin flip game</p>
                </a>
            </div>
            <div className="projectFourContainer">
                <a href="https://github.com/orgs/Parabox-Game/repositories" target="_blank" className="anchorContainer">
                    <img src={ParaboxLogo} alt="parabox" className="cardLogo"></img>
                    <span className="borderLine" />
                    <p className="projectTitle">Parabox</p>
                    <p className="projectDescription">This is an online virtual world web3 game powered by the Radix Distributed Ledger that enables players to own their own assets while offering a way for players to build their own worlds</p>
                </a>
            </div>
        </div>
    )
})

export default Projects;