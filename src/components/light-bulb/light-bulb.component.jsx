import React from 'react';
import './light-bulb.styles.css';

const LightBulb = ({ color, trafficLightClicked }) => (
    <div className="light-bulb">
        {
            color === "green"
            ? <div className="green-light bulb" onClick={() => trafficLightClicked()}></div>
            : (
                color === "yellow"
                ? <div className="yellow-light bulb"></div>
                : (
                    color === "red"
                    ? <div className="red-light bulb"></div>
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;