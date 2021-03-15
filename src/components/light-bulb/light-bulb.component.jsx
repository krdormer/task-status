import React from 'react';
import './light-bulb.styles.css';

const LightBulb = ({ color, trafficLightClicked }) => (
    // Displays an individual lightbulb div, the color of which depends on received color prop 
    // OnClick function calls trafficLightClicked function in parent, passing light color string
    <div className="light-bulbs">
        {
            color === "green"
            ? 
            (
                <div className="light-container">
                    <div className="lightbulb green-light" onClick={() => trafficLightClicked('greenLight')}></div>
                </div>
            )
            : (
                color === "yellow"
                ? 
                (
                    <div className="light-container">
                        <div className="lightbulb yellow-light" onClick={() => trafficLightClicked('yellowLight')}></div>
                    </div>
                )
                : (
                    color === "red"
                    ?
                    (
                        <div className="light-container">
                            <div className="lightbulb red-light" onClick={() => trafficLightClicked('redLight')}></div>
                        </div>
                    )
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;

