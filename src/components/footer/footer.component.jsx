import './footer.styles.css';

const Footer = () => (
    <div className="footer">
        {/* Opens new tab in browser to slack.com */}
        <a href="mailto:kevin.dormer@favordelivery.com" target="_blank" rel="noreferrer" className='footer-feedback-link'>
            <p className='footer-text feedback'>Feedback? Bugs? Let me know!</p>
        </a>
    </div>
);

export default Footer;