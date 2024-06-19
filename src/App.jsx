import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import './App.css';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Hero />
            <Features />
            <ContactForm />
            {/* Add other components here */}
        </div>
    );
};

export default App;
