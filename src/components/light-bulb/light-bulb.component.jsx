import React from 'react';
import './light-bulb.styles.css';

const LightBulb = ({ color, backgroundColor, trafficLightClicked }) => (
    <div className="light-bulb">
        {
            color === "green" || backgroundColor === "green"
            ? <div className="green-light" onClick={() => trafficLightClicked('greenLight')}></div>
            : (
                color === "yellow"
                ? <div className="yellow-light" onClick={() => trafficLightClicked('yellowLight')}></div>
                : (
                    color === "red"
                    ? <div className="red-light" onClick={() => trafficLightClicked('redLight')}></div>
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;