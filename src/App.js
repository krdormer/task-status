import './App.css';

import TrafficLight from '../src/components/traffic-light/traffic-light.component';
import SloganDisplay from '../src/components/slogan-display/slogan-display.component';

const App = () => (
    <div className="App">
      <h1>Favor Support Task Status</h1>
      <div className="status-light-container">
        <TrafficLight taskName="Customer Chats"/>
        <TrafficLight taskName="Runner Chats"/>
        <TrafficLight taskName="System Escalations"/>
        <TrafficLight taskName="H-E-B System Escalations" />
      </div>
      <SloganDisplay />
    </div>
);

export default App;