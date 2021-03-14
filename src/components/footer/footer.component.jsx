import './footer.styles.css';

const Footer = () => (
    <div className="footer">
        {/* Opens new tab in browser to slack.com */}
        <a href="https://app.slack.com/client/T026FTM0X/composer/draft-c5626161-20c4-4f91-9541-a4a901d8ea08" target="_blank" rel="noreferrer" className='footer-feedback-link'>
            <p className='footer-text feedback'>Feedback? Bugs? Let me know!</p>
        </a>
    </div>
);

export default Footer;