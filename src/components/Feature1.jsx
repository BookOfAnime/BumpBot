import React from 'react';
import featureIcon1 from '/pill.jpeg'; // Update with the correct path
import './Feature.css';

const Feature1 = ({ onClick, onClose, active }) => {
    return (
        <div className={`feature-item ${active ? 'active' : ''}`} onClick={onClick}>
            <div className="feature-icon-container">
                <img src={featureIcon1} alt="Feature 1 Icon" className="feature-item-icon" />
            </div>
            <h3 className="feature-item-title">Feature 1</h3>
            <p className="feature-item-description">Description of Feature 1.</p>
            {active && (
                <div className="feature-item-details">
                    <h3>Feature 1</h3>
                    <p>Detailed information about Feature 1.</p>
                    <button className="close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Feature1;
