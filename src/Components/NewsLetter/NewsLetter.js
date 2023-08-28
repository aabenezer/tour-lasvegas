import React, { useState } from 'react';
import './NewsLetter.css'

const NewsletterTab = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <div className="newsletter-tab">
            <h1>JOIN OUR NEWSLETTER</h1>
            <p>Stay updated with our latest news and offers!</p>
            <form onSubmit={handleSubmit}>
                <input className='newsletter-space'
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className='newsletter-button' type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsletterTab;
