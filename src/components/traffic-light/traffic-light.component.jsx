import React from 'react';
import './traffic-light.styles.css';

import LightBulb from '../light-bulb/light-bulb.component';

const TrafficLight = () => (
    <div className="traffic-light">
        <div className="lights">
            <LightBulb color="green"/>
            <LightBulb color="yellow"/>
            <LightBulb color="red"/>
        </div>
    </div>
);

export default TrafficLight;