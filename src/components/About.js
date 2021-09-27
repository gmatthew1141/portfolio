import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import { SiCss3, SiCsharp, SiJavascript, SiReact, SiJava, SiPython, SiHtml5, SiKotlin, SiCplusplus, SiUnity, SiVisualstudio, SiVisualstudiocode, SiIntellijidea, SiGithub, SiMongodb, SiMysql, SiAndroidstudio } from 'react-icons/si';
import { VscCompareChanges, VscCommentDiscussion } from 'react-icons/vsc';
import { RiTeamFill, RiTimerLine } from 'react-icons/ri';
import pic from './images/me-picture.PNG';


function About() {


    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const callbackFunction = (entries) => {

        const [entry] = entries;

        if (entry.isIntersecting) {
            setIsVisible(true);
        } 
    };

    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold:1.0
    //   }

    useEffect(() => {
        
        const observer = new IntersectionObserver(callbackFunction)

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    }, [containerRef])

    return (
        <div className="about-container" id="about">
            <div className="about-wrapper">
                <h1 className={isVisible ? "about-header header-animation" : "about-header"} ref={containerRef}>About</h1>
                <div className="about-img" >
                    <img src="./images/me-picture.png" alt="George under sakura tree" className={isVisible ? "me-picture img-animation" : "me-picture"}/>
                </div>

                <div className="values-wrapper">
                    <div className={isVisible ? "value value-animation value1-delay" : "value"}>
                        <VscCompareChanges size="5em" className="icon"/>
                        <h2 className="motto">Change</h2>
                        <p>As one of my great teacher said, "Changes is inevitable", both in life and certainly software engineering</p>
                    </div>
                    <div className={isVisible ? "value value-animation value2-delay" : "value"}>
                        <RiTeamFill size="5em" className="icon"/>
                        <h2 className="motto">Teamwork</h2>
                        <p>Teamwork helps solve difficult problems.</p>
                    </div>
                    <div className={isVisible ? "value value-animation value3-delay" : "value"}>
                        <VscCommentDiscussion size="5em" className="icon"/>
                        <h2 className="motto">Communication</h2>
                        <p>Communicating effectively is an important skill in life and for software engineer.</p>
                    </div>
                    <div className={isVisible ? "value value-animation value4-delay" : "value"}>
                        <RiTimerLine size="5em" className="icon"/>
                        <h2 className="motto">Time</h2>
                        <p>Work smart with good time management and get more done in less time.</p>
                    </div>

                </div>
                
                <div className={isVisible ? "icons-container icon-animation icon1-delay" : "icons-container"} >
                    <SiCsharp className="tech-icon" size="2em" title="C#"/>
                    <SiJava className="tech-icon" size="2em" title="Java"/>
                    <SiKotlin className="tech-icon" size="2em" title="Kotlin"/>
                    <SiCplusplus className="tech-icon" size="2em" title="C++"/>
                    <SiPython className="tech-icon" size="2em" title="Python"/>
                    <SiReact className="tech-icon" size="2em" title="React.js"/> 
                    <SiJavascript className="tech-icon" size="2em" title="Javascript"/>
                    <SiHtml5 className="tech-icon" size="2em" title="HTML5"/>
                    <SiCss3 className="tech-icon" size="2em" title="CSS"/>
                    <SiMongodb className="tech-icon" size="2em" title="MongoDB"/>
                    <SiMysql className="tech-icon" size="2em" title="MySQL"/>
                </div>
                <div className={isVisible ? "icons-container icon-animation icon2-delay" : "icons-container"} >
                    <SiUnity className="tech-icon" size="2em" title="Unity3D"/>
                    <SiVisualstudio className="tech-icon" size="2em" title="Visual Studio"/>
                    <SiVisualstudiocode className="tech-icon" size="2em" title="VS Code"/>
                    <SiIntellijidea className="tech-icon" size="2em" title="IntelliJ"/>
                    <SiAndroidstudio className="tech-icon" size="2em" title="Android Studio"/>
                    <SiGithub className="tech-icon" size="2em" title="Github"/>
                </div>
                
            </div>
        </div>
    )
};

export default About;
