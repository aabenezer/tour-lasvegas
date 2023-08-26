import React, { useState, useEffect } from "react";
import './Quote.css'

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        // Fetch quotes from the JSON file
        fetch("./Quotes.json")
            .then((response) => response.json())
            .then((data) => setQuotes(data))
            .catch((error) => console.error("Error fetching quotes:", error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds

        return () => clearInterval(interval);
    }, [quotes.length]);

    const handleDotClick = (index) => {
        setCurrentQuote(index);
    };

    if (quotes.length === 0) {
        return <p>Loading quotes...</p>;
    }

    const { quote, author, image } = quotes[currentQuote];

    return (
        <div className="quote-container">
            <div className="quote-details">
                <div className="image-container">
                    <img src={image} alt={author} className="author-image" />
                </div>
                <div className="quote-text"><span className="quote-mark">&ldquo;</span>{quote}<span className="quote-mark">&ldquo;</span></div>
                <div className="author-name">_ {author}</div>
            </div>
            <div className="dot-indicators">
                {quotes.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentQuote === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Quote;
