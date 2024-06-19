import React from 'react';
import featureIcon2 from '/pill.jpeg'; // Update with the correct path
import './Feature.css';

const Feature2 = ({ onClick, onClose, active }) => {
    return (
        <div className={`feature-item ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={featureIcon2} alt="Feature 2 Icon" className="feature-item-icon" />
            <h3 className="feature-item-title">Feature 2</h3>
            <p className="feature-item-description">Description of Feature 2.</p>
            {active && (
                <div className="feature-item-details">
                    <h3>Feature 2</h3>
                    <p>Detailed information about Feature 2.</p>
                    <button className="close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Feature2;