import React from "react";

import "./contact.css";

const Contact = React.forwardRef(({ innerRef }, prop) => {
    return(
        <div ref={innerRef} className="contactContainer">
            <span className="cardContainer">
                <p className="headerContainer">Contact Me:</p>
                <p className="emailContainer">bowabla@gmail.com</p>
                <a href="https://www.linkedin.com/in/blake-bowser-2b6884170" target="_blank" rel="noopener noreferrer" className="linkedinLink">Linked In</a>
                <a href="mailto:bowabla@gmail.com" target="_blank" rel="noreferrer" className="emailLink">Email Me</a>
                <a href="https://github.com/artificr" target="_blank" rel="noreferrer" className="githubLink">Github</a>
                
            </span>
        </div>
    )
})

export default Contact;