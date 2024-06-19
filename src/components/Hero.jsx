import React from 'react';
import pillIcon from '/pill.jpeg'; // Update with the correct path
import trendingIcon from '/pill.jpeg'; // Update with the correct path
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="animate__animated animate__fadeInDown">SOLar Bump</h1>
                    <h2 className="animate__animated animate__fadeInUp">The Fastest Bump Bot On the Planet!</h2>
                    <div className="features">
                        <div className="feature animate__animated animate__fadeInLeft">
                            <h3>First:</h3>
                            <p style={{paddingTop:"10px"}}>Appear at the top of Pump.fun token list and always on the first page.</p>
                        </div>
                        <div className="feature animate__animated animate__fadeInRight">
                            <h3>
                                Win:
                                
                            </h3>
                            <p>Trends your token on Photon across all time spans. Leave your competition in the dust.</p>
                        </div>
                    </div>
                    <div className="cta animate__animated animate__fadeInUp">
                        <p>Sign up now and start bumping!</p>
                        <br />
                        <a href="#register" className="btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
