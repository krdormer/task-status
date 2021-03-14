import './App.css';

import TrafficLight from '../src/components/traffic-light/traffic-light.component';
import SloganDisplay from '../src/components/slogan-display/slogan-display.component';
import Footer from '../src/components/footer/footer.component';

const App = () => (
    <div className="App">
      <h1 className="app-title">Favor Support Task Status</h1>

      {/* Container for Traffic Light Components */}
      <div className="status-light-container">
        <TrafficLight taskName="Customer Chats"/>
        <TrafficLight taskName="Runner Chats"/>
        <TrafficLight taskName="System Escalations"/>
        <TrafficLight taskName="H-E-B System Escalations" />
      </div>
      {/* Component for display of current Support campaign(s) */}
      <SloganDisplay />
      {/* Component for display of footer info, feedback, contact, etc */}
      <Footer />
    </div>
);

export default App;