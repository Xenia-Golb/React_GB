
import './App.css';
import CurrentTime from './components/CurrentTime/CurrentTime';
import EventCard from './components/EventCard/EventCard';
import Greeting from './components/Greeting/Greeting';
import Message from './components/Message/Message'



export function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greeting />
      <CurrentTime />
      <EventCard
        name="Birthday"
        description="A day of celebration"
        date="2023-05-01"
      />

      <EventCard
        EventCard
        name="Wedding"
        description="A day of love"
        date="2023-05-02"
      />
      <Message
        text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, repellendus.'
      />
      <Message
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab deserunt dignissimos est odio deleniti praesentium nostrum at'
      />

    </div>
  );
}


export default App;
