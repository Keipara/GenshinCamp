import React from "react";
import logo from '../images/maple.png'
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <div className='main-home'>

                <div className='top-half'>
                    <h1>Does your music belong on Soundtrack Cloud?</h1>
                    <img src={logo} alt='maple'/>
                    <h2>Sign up now and start uploading.</h2>
                    <div className='signup-button'> <a href="/signup">Sign Up</a> </div>
                </div>

                <div className='bottom-half'>
                    <h2>Come immerse yourself in our soundtrack collection.</h2>
                    <div className='discover-button'> <a href="/discover">View Songs</a> </div>
                </div>

            </div>

            <div className='footer-container'>
                <h3>Kiara Mendaros</h3>
                <div className="Kiara-github">
                    <a href='https://github.com/Keipara'>Github</a>
                </div>
                <div className="Kiara-linkedin">
                    <a href='https://www.linkedin.com/in/kiara-mendaros-9761101b8/' className="test">LinkedIn</a>
                </div>
            </div>
        </>
    )
}

export default HomePage;
