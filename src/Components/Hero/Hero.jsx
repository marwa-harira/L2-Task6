import './Hero.css';

const Hero = ({ image, title, description, email, onEmailChange, onSubmit, btn }) => {
    return (
        <div className="hero">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="input-container">
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={onEmailChange}
                />
                <button onClick={onSubmit}>{btn}</button>
            </div>
        </div>
    );
};

export default Hero;
