import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
                .then((result) => {
                    console.log(result.text);
                    setIsSubmitted(true);
                }, (error) => {
                    console.log(error.text);
                });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <section id="contact-section">
            <div className="contact-container">
                <h2>Contact Us</h2>
                {isSubmitted ? (
                    <p className="success-message">Your message has been sent successfully!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && <p className="error">{formErrors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <p className="error">{formErrors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {formErrors.message && <p className="error">{formErrors.message}</p>}
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
