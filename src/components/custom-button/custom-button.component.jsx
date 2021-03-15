import React from 'react';
import './custom-button.styles.css';

import { ReactComponent as Slack } from '../../assets/slack_icon.svg';

const CustomButton = () => (
    <div className="custom-button">
        <div className="custom-button-container">
            <Slack />
        </div>
    </div>
);

export default CustomButton;