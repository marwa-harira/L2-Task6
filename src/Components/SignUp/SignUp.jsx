import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './SignUp.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';




const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
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
            <section className="sign-up-section">
                <SectionTitle
                    title="Sign Up"
                    description="Create an account by entering your details below!"
                />

                <div className="sign-up-container">
                    <form onSubmit={handleSubmit} className="sign-up-form">
                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>

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

                        <button type="submit" className="sign-up-button">
                            Sign Up
                        </button>
                    </form>

                    <p className="sign-up-footer">
                        Have an account?<Link to="/sign-up" style={{ textDecoration: 'underline' }}>Login</Link>
                    </p>
                </div>
            </section>
            <Footer />

        </>

    );
};

export default SignUp;
