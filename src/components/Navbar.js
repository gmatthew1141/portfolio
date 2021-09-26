import React from 'react';
import './Navbar.css';
import { Link } from "react-scroll";
import resume from '../Documents/Resume-Latest.pdf';

function Navbar() {

    return (
        <>
			<nav className="nav" id="navbar">
				<div className="nav-container">
					<a href="/" className="nav-logo">GM</a>
				</div>
				<ul className="nav-items">
					<li className="nav-item">
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500} 
							className="nav-link">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="nav-link">
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<a href={resume} className="nav-link" rel="noopener noreferrer" target="_blank">Resume</a>
					</li>
					{/* <li className="nav-item">
						<a href="/" className="nav-link">Contact</a>
					</li> */}
				</ul>
			</nav>
        </>
    )
}

export default Navbar
