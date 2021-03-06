import React from 'react';
import './traffic-light.styles.css';

import LightBulb from '../light-bulb/light-bulb.component';

class TrafficLight extends React.Component {
    constructor() {
        super();

        // Initial State 
        this.state = {
            // Background color of traffic light set as green
            backgroundColor: "green",
            // Light bulb objects, 
                // color property is for default background color of light  
                // clicked property is defaulted to false 
            greenLight: {
                color: "green",
                clicked: false
            },
            yellowLight: {
                color: "yellow",
                clicked: false
            },
            redLight: {
                color: "red",
                clicked: false
            }
        }
    }

    // Function for updating traffic light background color state when light bulb component is clicked 
    // Accepts string of lightColor, outputs new state 
    trafficLightClicked = ( lightColor ) => {
        switch (lightColor) {
            case 'greenLight':
                return this.setState({ 
                    backgroundColor: "green",
                    greenLight: {
                        color: "green",
                        clicked: true
                    }
                });
            case 'yellowLight':
                return this.setState({
                    backgroundColor: "yellow",
                    yellowLight: {
                        color: "yellow",
                        clicked: true
                    }
                });
            case 'redLight':
                return this.setState({
                    backgroundColor: "red",
                    redLight: {
                        color: "red",
                        clicked: true
                    }
                });
            default:
                return null;
        };
    };

    render() {
        const { taskName } = this.props;
        const { greenLight, yellowLight, redLight, backgroundColor } = this.state;
        return (
            // Renders a traffic light, containing 3 light bulbs
            // If state property backgroundColor exists, string backgroundColor becomes class name, updates background color 
            <div className={`${backgroundColor} ? ${backgroundColor} traffic-light : traffic-light`}>
                {/* Displays name of Support Task */}
                <div className="task-text">
                    <h3>{taskName}</h3>
                </div>
                {/* Lightbulb container */}
                <div className="light-container">
                    <LightBulb 
                        color={greenLight.color}
                        backgroundColor={greenLight.backgroundColor}
                        trafficLightClicked={this.trafficLightClicked}
                    />
                    <LightBulb 
                        color={yellowLight.color}
                        backgroundColor={yellowLight.backgroundColor}
                        trafficLightClicked={this.trafficLightClicked}
                    />
                    <LightBulb 
                        color={redLight.color}
                        backgroundColor={redLight.backgroundColor}
                        trafficLightClicked={this.trafficLightClicked}
                    />
                </div>
            </div>
        );
    }
}

export default TrafficLight;