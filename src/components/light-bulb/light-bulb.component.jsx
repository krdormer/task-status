import React from 'react';
import './light-bulb.styles.css';

const LightBulb = ({ color, trafficLightClicked }) => (
    <div className="light-bulb">
        {
            color === "green"
            ? <div className="green-light lightbulb" onClick={() => trafficLightClicked('greenLight')}></div>
            : (
                color === "yellow"
                ? <div className="yellow-light lightbulb" onClick={() => trafficLightClicked('yellowLight')}></div>
                : (
                    color === "red"
                    ? <div className="red-light lightbulb" onClick={() => trafficLightClicked('redLight')}></div>
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;