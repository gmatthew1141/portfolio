import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container" id="home">
            <video src="./videos/video-3.MP4" autoPlay loop muted/>
            <h1 className="name">George Matthew</h1>
            <h1 className="greetings">Software Engineer recently graduated from University of Maryland.</h1>
            
        </div>
    )
};

export default Home;
