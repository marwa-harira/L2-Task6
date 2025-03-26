import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './SignIn.css';
import { Link } from 'react-router-dom';



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const navItems = [{
        href: "/",
        content: "Home"
    },
    {
        href: "/about",
        content: "About"
    }]

    return (
        <>
            <NavBar logo="Your Name" navItems={navItems} btn="sign in" />
            <section className="sign-in-section">
                <SectionTitle
                    title="Sign In"
                    description="Enter your email and password to sign in!"
                />


                <div className="sign-in-container">
                    <form onSubmit={handleSubmit} className="sign-in-form">
                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                    <p className="sign-in-footer">
                        Don't have an account? <Link to="/sign-up" style={{ textDecoration: 'underline' }}>Sign Up</Link>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default SignIn;

