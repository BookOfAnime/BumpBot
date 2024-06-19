import React from 'react';
import featureIcon3 from '/pill.jpeg'; // Update with the correct path
import './Feature.css';

const Feature3 = ({ onClick, onClose, active }) => {
    return (
        <div className={`feature-item ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={featureIcon3} alt="Feature 3 Icon" className="feature-item-icon" />
            <h3 className="feature-item-title">Feature 3</h3>
            <p className="feature-item-description">Description of Feature 3.</p>
            {active && (
                <div className="feature-item-details">
                    <h3>Feature 3</h3>
                    <p>Detailed information about Feature 3.</p>
                    <button className="close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Feature3;