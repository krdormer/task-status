import './App.css';
import TrafficLight from '../src/components/traffic-light/traffic-light.component';

function App() {
  return (
    <div className="App">
      <h1>Favor Support Task Status</h1>
      <div className="status-light-container">
        <TrafficLight taskName="Customer Chats"/>
        <TrafficLight taskName="Runner Chats"/>
        <TrafficLight taskName="System Escalations"/>
      </div>
    </div>
  );
}

export default App;