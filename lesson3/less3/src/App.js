import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import MessageList from './components/MessageList';
// import TextDisplayForm from './components/TextDisplayForm';
import ThemeSwitche from './components/ThemeSwitcher';
import TemperatureConverter from './components/hw/TemperatureConverter';
import ToDoList from './components/hw/ToDoList';




function App() {
  const name = "Arun";
  return (
    <div className="App">
      {/* <Greetings name={name} />
      <Counter />
      <MessageList />
      <ThemeSwitche /> */}
      {/* <TextDisplayForm /> */}
      <TemperatureConverter />
      <ToDoList />
    </div>
  );
}

export default App;
