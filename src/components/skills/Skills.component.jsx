import React from "react";

import ReactJsLogo from "../../assets/reactlogo.png";
import HtmlLogo from "../../assets/htmllogo.png";
import CssLogo from "../../assets/csslogo.png";
import JsLogo from "../../assets/jslogo.png";
import NodeJsLogo from "../../assets/nodejslogo.png";
import ExpressJsLogo from "../../assets/expresslogo.png";
import PythonLogo from "../../assets/pythonlogo.png";
import SqlLogo from "../../assets/sqllogo.png";
import GithubLogo from "../../assets/githublogo.png";
import AzureLogo from "../../assets/azurelogo.png";
import SolidityLogo from "../../assets/soliditylogo.png";
import ScryptoLogo from "../../assets/scryptologo.png";

import "./skills.css";

const Skills = React.forwardRef(({ innerRef }, prop) => {
    return(
        <div ref={innerRef} className="skillsContainer">
            <h2 className="skillsHeader">Skills:</h2>
            <div className="reactCardContainer">
                <p className="skillsTitle">ReactJS</p>
                <img src={ReactJsLogo} alt="react js" className="skillsLogo"></img>
            </div>
            <div className="htmlCardContainer">
                <p className="skillsTitle">HTML</p>
                <img src={HtmlLogo} alt="html" className="skillsLogo"></img>
            </div>
            <div className="cssCardContainer">
                <p className="skillsTitle">CSS</p>
                <img src={CssLogo} alt="css" className="skillsLogo"></img>
            </div>
            <div className="jsCardContainer">
                <p className="skillsTitle">Javascript</p>
                <img src={JsLogo} alt="javascript" className="skillsLogo"></img>
            </div>
            <div className="nodeCardContainer">
                <p className="skillsTitle">NodeJS</p>
                <img src={NodeJsLogo} alt="node js" className="skillsLogo"></img>
            </div>
            <div className="expressCardContainer">
                <p className="skillsTitle">Express</p>
                <img src={ExpressJsLogo} alt="express js" className="skillsLogo"></img>
            </div>
            <div className="pythonCardContainer">
                <p className="skillsTitle">Python</p>
                <img src={PythonLogo} alt="python" className="skillsLogo"></img>
            </div>
            <div className="sqlCardContainer">
                <p className="skillsTitle">SQL</p>
                <img src={SqlLogo} alt="sql" className="skillsLogo"></img>
            </div>
            <div className="solidityCardContainer">
                <p className="skillsTitle">Solidity</p>
                <img src={SolidityLogo} alt="solidity" className="skillsLogo"></img>
            </div>
            <div className="scryptoCardContainer">
                <p className="skillsTitle">Scrypto</p>
                <img src={ScryptoLogo} alt="scrypto" className="skillsLogo"></img>
            </div>
            <div className="githubCardContainer">
                <p className="skillsTitle">Github</p>
                <img src={GithubLogo} alt="github" className="skillsLogo"></img>
            </div>
            <div className="azureCardContainer">
                <p className="skillsTitle">Azure</p>
                <img src={AzureLogo} alt="ms azure" className="skillsLogo"></img>
            </div>
        </div>
    )
})

export default Skills;