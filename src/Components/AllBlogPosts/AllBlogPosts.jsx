import SectionTitle from '../SectionTitle/SectionTitle'
import './AllBlogPosts.css'
import Card from './Card'


function AllBlogPosts({ title }) {
    const cardData = [
        {
            image: "/assets/img/img1.png",
            content: "Alec Whitten • 1 Jan 2023",
            title: "Bill Walsh leadership lessons",
            description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },

        {
            image: "/assets/img/img2.png",
            content: "Demi WIlkinson • 1 Jan 2023",
            title: "PM mental models",
            description: "Mental models are simple expressions of complex processes or relationships."
        },

        {
            image: "/assets/img/img3.png",
            content: "Candice Wu • 1 Jan 2023",
            title: "What is Wireframing?",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
        },

        {
            image: "/assets/img/img4.png",
            content: "Natali Craig • 1 Jan 2023",
            title: "How collaboration makes us better designers",
            description: "Collaboration can make our teams stronger, and our individual designs better."
        },

        {
            image: "/assets/img/img5.png",
            content: "Drew Cano • 1 Jan 2023",
            title: "Our top 10 Javascript frameworks to use",
            description: "JavaScript frameworks make development easy with extensive features and functionalities."
        },

        {
            image: "/assets/img/img6.png",
            content: "Orlando Diggs • 1 Jan 2023",
            title: "Podcast: Creating a better CX Community",
            description: "Starting a community doesn’t need to be complicated, but how do you get started?"
        }
    ]
    return (
        <section className='Posts'>
            <SectionTitle title="All Blog Posts" />
            <div className="CardsWrapper">
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        content={data.content}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </div>

        </section>
    )
}

export default AllBlogPosts
