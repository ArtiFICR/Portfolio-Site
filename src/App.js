import React, { useRef } from "react";

import './App.css';

import Header from './components/header/Header.component';
import Introduction from './components/Introduction/Introduction.component';
import AboutMe from './components/aboutme/AboutMe.component';
import Projects from './components/projects/Projects.component';
import Skills from './components/skills/Skills.component';
import Contact from './components/contact/Contact.component';

const App = () => {

    const aboutRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    return (
        <div className="App">
            <Header aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
            <Introduction />
            <AboutMe innerRef={aboutRef} />
            <Skills innerRef={skillsRef} />
            <Projects innerRef={projectsRef} />
            <Contact innerRef={contactRef} />
        </div>
    );
}

export default App;
