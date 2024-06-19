import React from 'react';
import pillIcon from '/pill.jpeg'; // Update with the correct path
import trendingIcon from '/pill.jpeg'; // Update with the correct path
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="animate__animated animate__fadeInDown">BumpIt</h1>
                    <p className="version animate__animated animate__fadeInUp">Version 1.3.5: Pump.fun</p>
                    <h2 className="animate__animated animate__fadeInUp">The Fastest Bump Bot On the Planet!</h2>
                    <div className="features">
                        <div className="feature animate__animated animate__fadeInLeft">
                            <img src={pillIcon} alt="Pill Icon" className="feature-icon" />
                            <h3>First Page - All of the time.</h3>
                            <p>Appear at the top of Pump.fun token list and always on the first page.</p>
                        </div>
                        <div className="feature animate__animated animate__fadeInRight">
                            <img src={trendingIcon} alt="Trending Icon" className="feature-icon" />
                            <h3>Dominate Photon Trending</h3>
                            <p>Trends your token on Photon across all time spans. Leave your competition in the dust.</p>
                        </div>
                    </div>
                    <div className="cta animate__animated animate__fadeInUp">
                        <p>Sign up now and start bumping!</p>
                        <a href="#register" className="btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
