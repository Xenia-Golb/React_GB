
import './App.css';
import { FilterProvider } from './context/FilterContext';
import AddTodo from './components/AddToDo';
import FilterToDo from './components/FilterToDo';
import ToDoList from './components/ToDoList';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <AddTodo />
        <ToDoList />
        <FilterToDo />
      </FilterProvider>

      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
