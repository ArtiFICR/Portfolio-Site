import React from "react";

import "./aboutme.css";

const AboutMe = React.forwardRef(({ innerRef }, prop) => {
    return(
        <div ref={innerRef} className="aboutmeContainer">
            <h2 className="aboutmeHeader">About Me:</h2>
            <span className="rightBorder"/>
            <p className="paragraphOne">Hi, I'm Blake, a Web3 full stack developer with a passion for building decentralized applications. With experience in Scrypto, Solidity, React, and Node.js, I have the skills to bring your ideas to life on the blockchain. I've always been fascinated by the potential of blockchain technology to revolutionize the way we interact with each other and the world around us. That's why I've dedicated myself to mastering the tools and techniques needed to create powerful decentralized applications.</p>
            <p className="paragraphTwo">In my work, I'm constantly exploring new technologies and staying up-to-date with the latest developments in the Web3 ecosystem. Whether it's creating smart contracts that enable secure and transparent transactions or building user-friendly front-end interfaces that make it easy for anyone to interact with the blockchain, I'm always striving to deliver high-quality work that exceeds expectations. But my passion for Web3 development isn't just about the technical details. I also believe in the power of decentralized technology to create a more fair and equitable world. By building applications that empower individuals and communities, I hope to contribute to a brighter future for us all. If you'd like to collaborate or learn more about my work, feel free to reach out. I'm always happy to connect with others who share my passion for Web3 development.</p>
        </div>
    )
})

export default AboutMe;