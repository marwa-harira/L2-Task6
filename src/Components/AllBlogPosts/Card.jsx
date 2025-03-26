import './Card.css';
import { FaArrowUp } from 'react-icons/fa';

function Card({ image, title, content, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-img" />
            <p className="card-content">{content}</p>
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <FaArrowUp className="card-icon" />
            </div>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default Card;
