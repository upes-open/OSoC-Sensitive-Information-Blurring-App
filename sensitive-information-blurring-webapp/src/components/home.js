import React from 'react';
import '../homepage/styles.css'; // Make sure to import the corresponding CSS file if needed
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <Navbar />

            <div>

                <header className="landing-page-header">
                    <div className="header-content">
                        <div className="left-content">
                            <h1>Giving You the Power of Privacy</h1>
                            <p>Our app empowers you to securely share files while safeguarding your privacy.</p>
                            <a href="#get-started" className="cta-button">Get Started</a>
                        </div>
                        <div className="hero-content">
                            <img src="hero_img.png" alt="hero" />
                        </div>
                    </div>
                </header>

                <section id="get-started" className="feature-section">
                    <div className="feature-content">
                        <h2>How it Works?</h2>
                        <p>Our web app combines image processing techniques and advanced machine learning algorithms to comprehensively analyze the files you upload. Through this amalgamation of technologies, we identify and isolate sensitive content, such as images, credit card numbers, addresses, and various types of predefined PII.</p>
                    </div>
                    <div className="right-content">
                        <img src="comp.png" alt="Content" />
                    </div>
                </section>

                <section className="feature-section alternate">
                    <div className="left-content">
                        <img src="security.png" alt="Content" />
                    </div>
                    <div className="feature-content">
                        <h2>Security at its Core</h2>
                        <p>We understand the value of your sensitive data and are committed to ensuring its confidentiality. Our automated process meticulously detects and allows you to blur sensitive information, rendering it indecipherable to unauthorized users. This secure transformation not only protects your data from prying eyes but also empowers you to share documents confidently.</p>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="feature-content">
                        <h2>Our Ethics</h2>
                        <p>We prioritize privacy by employing encryption and adhering to best practices in data handling. Your documents are processed swiftly and efficiently, leaving no room for data leaks or breaches.</p>
                    </div>
                    <div className="right-content">
                        <img src="ethics.png" alt="Content" />
                    </div>
                </section>

                <section className="feature-section alternate">
                    <div className="left-content">
                        <img src="Use.png" alt="Content" />
                    </div>
                    <div className="feature-content">
                        <h2>Free to Use!</h2>
                        <p>Whether you're an individual or an enterprise, our web app has you covered.</p>
                    </div>
                </section>

                <section className="get-started-section">
                    <div className="feature-cnt">
                        <a href="#get-started" className="cta-button">Get Started</a>
                        <p>Share sensitive content confidently, knowing that your data is shielded by the latest advancements in technology.</p>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    );
};

export default Home;
