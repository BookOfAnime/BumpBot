import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            {/* Add other components here */}
        </div>
    );
};

export default App;
