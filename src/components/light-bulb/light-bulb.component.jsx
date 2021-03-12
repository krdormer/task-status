import React from 'react';
import './light-bulb.styles.css';

const LightBulb = ({ color }) => (
    <div className="light-bulb">
        {
            color === "green"
            ? <div className="green-light"></div>
            : (
                color === "yellow"
                ? <div className="yellow-light"></div>
                : (
                    color === "red"
                    ? <div className="red-light"></div>
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;