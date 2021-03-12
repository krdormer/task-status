import React from 'react';
import './traffic-light.styles.css';

import LightBulb from '../light-bulb/light-bulb.component';

const TrafficLight = ({ taskName }) => (
    <div className="traffic-light">
        <h2>{taskName}</h2>
        <div className="lights">
            <LightBulb color="green"/>
            <LightBulb color="yellow"/>
            <LightBulb color="red"/>
        </div>
    </div>
);

export default TrafficLight;