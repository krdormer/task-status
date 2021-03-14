import './light-bulb.styles.css';

const LightBulb = ({ color, trafficLightClicked }) => (
    // Displays an individual lightbulb div, the color of which depends on received color prop 
    // OnClick function calls trafficLightClicked function in parent, passing light color string
    <div className="light-bulb">
        {
            color === "green"
            ? <div className="lightbulb green-light" onClick={() => trafficLightClicked('greenLight')}></div>
            : (
                color === "yellow"
                ? <div className="lightbulb yellow-light" onClick={() => trafficLightClicked('yellowLight')}></div>
                : (
                    color === "red"
                    ? <div className="lightbulb red-light" onClick={() => trafficLightClicked('redLight')}></div>
                    : null
                )
            )
        }
    </div>
);

export default LightBulb;