import AllBlogPosts from '../Components/AllBlogPosts/AllBlogPosts';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
function About() {
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
            <AllBlogPosts />
            < Footer />
        </>
    )
}

export default About
