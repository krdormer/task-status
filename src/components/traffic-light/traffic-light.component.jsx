import React from 'react';
import './traffic-light.styles.css';

import LightBulb from '../light-bulb/light-bulb.component';

class TrafficLight extends React.Component {
    constructor() {
        super();

        this.state = {
            backgroundColor: "green",
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

    // Remember to add previous state or the buttons disappear 9
    trafficLightClicked = ( lightColor ) => {
        if (lightColor === 'greenLight') {
            this.setState({ 
                backgroundColor: "green",
                greenLight: {
                    color: "green",
                    clicked: true
                }
            })
        } else if (lightColor === 'yellowLight') {
            this.setState({
                backgroundColor: "yellow",
                yellowLight: {
                    color: "yellow",
                    clicked: true
                }
            })
        } else if (lightColor === 'redLight') {
            this.setState({
                backgroundColor: "red",
                redLight: {
                    color: "red",
                    clicked: true
                }
            })
        }
    };

    render() {
        const { taskName } = this.props;
        const { greenLight, yellowLight, redLight, backgroundColor } = this.state;
        console.log(this.state);
        return (
            <div className={`${backgroundColor} ? ${backgroundColor} traffic-light : traffic-light`}>
                <h3 className='task-text'>{taskName}</h3>
                <div className="lights">
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