import React from 'react';
import './traffic-light.styles.css';

import LightBulb from '../light-bulb/light-bulb.component';

class TrafficLight extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    trafficLightClicked = () => {
        this.setState({ active: true });
    }
    

    render() {
        const { taskName } = this.props;
        console.log(this.state);
        return (
            <div className="traffic-light">
                <h2>{taskName}</h2>
                <div className="lights">
                    <LightBulb 
                        color="green"
                        trafficLightClicked={this.trafficLightClicked}
                    />
                    <LightBulb color="yellow"/>
                    <LightBulb color="red"/>
                </div>
            </div>
        );
    }
}

export default TrafficLight;