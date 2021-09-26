import React, { useRef, useState, useEffect } from 'react';
import Project from './Project';
import './Projects.css';
import vlearn from './images/vlearn.PNG';
import ss from './images/umd-logo.SVG';
import ps from './images/pfs-main.PNG';
import jgu from './images/jgu-game.PNG';
import gng from './images/GNGIcon.PNG';


const currProjects = [
    ({id:1, title: "Vlearn", src:{vlearn}, type:"Research Project", location:"College Park, MD", timeline:"Feb 2021 - Aug 2021", desc: ["Integrated a multi-agent system using Photon PUN V2 into an existing virtual environment used for Neurological tests in Unity", "Developed REST API that allows administrators to spawn and operate a bot remotely.", "Developed and added in a new task, Tower of Hanoi, into the web app.", "Created a decision tree scripts that allows a bot to complete task without human input."]}),
    ({id:2, title: "Shift Scheduler", src:{ss}, type:"Personal Project", location:"Hyattsville, MD", timeline:"May 2021", desc: ["Built a desktop application using .Net Core WPF framework.", "Applied MVVM design pattern.", "Utilize MongoDB to store data.", "Extract and present required data to downloadable .csv file."]}),
    ({id:3, title: "Pathfinding Simulation", src:{ps}, type:"Personal Project", location:"Hyattsville, MD", timeline:"Jul 2021", desc: ["Created a simulation for pathfinding algorithm using Unity", "Visualized the visited nodes and path taken.", "Implemented A*, Djisktra’s, Breadth-First Search and Depth-First Search pathfinding algorithm.", "Allowed player to choose start/goal position and customize tiles with 6 different obstacles."]}),
    ({id:4, title: "Just Give Up - Game", src:{jgu}, type:"Class Project", location:"College Park, MD", timeline:"Jan 2021 - May 2021", desc: ["Implemented Inverse Kinematics to animate character movements.", "Used Post-Processing to make the scene more aesthetically pleasing.", "Developed a Wallride system.", "Utilized Pro Builder to model the character and environment objects."]}),
    ({id:5, title: "Go-NoGo Android Application", src:{gng}, type:"Class Project", location:"College Park, MD", timeline:"Jan 2021 - May 2021", desc: ["Design a Go-NoGo reaction test application using MVC design pattern.", "Created a login system to allow users to see other user's test score.", "Utilized Firebase to store data."]})
]

function Projects() {

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const callbackFunction = (entries) => {

        const [entry] = entries;

        if (entry.isIntersecting) {
            setIsVisible(true);
        } 
    };

    useEffect(() => {
        
        const observer = new IntersectionObserver(callbackFunction)

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

    }, [containerRef])

    return (
        <div className= "projects-container" id="projects">
            <h1 className={isVisible ? "project-header header-animation" : "project-header"} ref={containerRef}>Projects</h1>
            {currProjects.map((project) => (
                <Project 
                    key={project.id}
                    id={project.id}
                    title={project.title} 
                    src={project.src} 
                    type={project.type}
                    location={project.location} 
                    timeline={project.timeline} 
                    desc={
                        project.desc.map((desc, i) => (
                            <li key={i}>{desc}</li>)
                        )
                    }
                    visible={isVisible}/>
            ))}

        </div>
    )
};

export default Projects;
