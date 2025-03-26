import './SectionTitle.css'

function SectionTitle({ title, description }) {
    return (
        <div className='section-title-container'>
            <h1 className='title'>{title}</h1>
            <p className='description'>{description}</p>
        </div>
    )
}


export default SectionTitle
