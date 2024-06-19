import React, { useState, Suspense, lazy } from 'react';
import './Feature.css';

const Feature1 = lazy(() => import('./Feature1'));
const Feature2 = lazy(() => import('./Feature2'));
const Feature3 = lazy(() => import('./Feature3'));

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const handleClick = (feature) => {
        setActiveFeature(feature);
    };

    const handleClose = () => {
        setActiveFeature(null);
    };

    return (
        <section id="features-section">
            <div className={`features-container ${activeFeature ? 'expanded' : ''}`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Feature1 onClick={() => handleClick('feature1')} onClose={handleClose} active={activeFeature === 'feature1'} />
                    <Feature2 onClick={() => handleClick('feature2')} onClose={handleClose} active={activeFeature === 'feature2'} />
                    <Feature3 onClick={() => handleClick('feature3')} onClose={handleClose} active={activeFeature === 'feature3'} />
                </Suspense>
            </div>
        </section>
    );
};

export default Features;
