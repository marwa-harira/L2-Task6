import NavBar from '../Components/NavBar/NavBar';
import React, { useState } from "react";
import Hero from '../Components/Hero/Hero';
import AllBlogPosts from '../Components/AllBlogPosts/AllBlogPosts';
import Footer from '../Components/Footer/Footer';


function Home() {
    const [email, setEmail] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        alert(`Submitted Email: ${email}`);
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
            <Hero image="/assets/img/herobg.jpg" title="Stories and interviews" description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
                email={email}
                onEmailChange={handleEmailChange}
                onSubmit={handleSubmit}
                btn="Subscribe" />
            < AllBlogPosts title="All Blog Posts" />

            <Footer />

        </>
    )
}

export default Home
