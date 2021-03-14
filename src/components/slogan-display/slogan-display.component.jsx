import './slogan-display.styles.css';

// Component receives prop slogan, used to display support slogans 
const SloganDisplay = ({ slogan }) => (
    <div className="slogan-display">
        <p className="slogan-text">{slogan}</p>
    </div>
);

export default SloganDisplay;