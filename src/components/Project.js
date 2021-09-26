import React from 'react';
import "./Project.css";

function Project(props) {

    let src = null;

    if (props.id === 1) {
        src = props.src.vlearn;
    } else if (props.id === 2) {
        src = props.src.ss;
    } else if (props.id === 3) {
        src = props.src.ps;
    } else if (props.id === 4) {
        src = props.src.jgu;
    } else {
        src = props.src.gng;
    }

    return (
        <div className="project-container">
            <img src={src} alt={props.alt} className={props.visible ? `project-img img-animation value${props.id}-delay` : "project-img"} />
            <div className={props.visible ? `project-details details-animation value${props.id}-delay` : "project-details"}>
                <h2 className="project-title">{props.title}</h2>
                <h4 className="project-info">{props.type} | {props.location} | {props.timeline}</h4>
                <ul className="project-desc">{props.desc}</ul>
            </div>
        </div>
    )
};

export default Project;
