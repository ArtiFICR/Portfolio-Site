import React from "react";

import AboutIcon from "../../assets/abouticon.png";
import SkillsIcon from "../../assets/skillicon.png";
import ProjectsIcon from "../../assets/projectsicon.png";
import ContactIcon from "../../assets/contacticon.png";

import "./header.css";

const Header = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
    const handleScrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });

    const handleScrollToSkills = () => skillsRef.current.scrollIntoView({ behavior: "smooth" });

    const handleScrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: "smooth" });

    const handleScrollToContact = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

    return(
        <div className="header-bar">
            <button className="aboutHeaderContainer" onClick={handleScrollToAbout} ref={aboutRef}>
                <img src={AboutIcon} alt="about" className="aboutIcon" />
                <p className="headerText">About</p>
            </button>
            <button className="skillsHeaderContainer" onClick={handleScrollToSkills} ref={skillsRef}>
                <img src={SkillsIcon} alt="skills" className="skillsIcon" />
                <p className="headerText">Skills</p>
            </button>
            <button className="projectsHeaderContainer" onClick={handleScrollToProjects} ref={projectsRef}>
                <img src={ProjectsIcon} alt="projects" className="projectsIcon" />
                <p className="headerText">Projects</p>
            </button>
            <button className="contactHeaderContainer" onClick={handleScrollToContact} ref={contactRef}>
                <img src={ContactIcon} alt="contact" className="contactIcon" />
                <p className="headerText">Contact</p>
            </button>
        </div>
    )
}

export default Header;