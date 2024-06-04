
import './App.css';
import CommentsList from './components/CommentsList/CommentsList';
import Counter from './components/Counter/Counter';
import TextInput from './components/TextInput/TextInput';
import Timer from './components/Timer/Timer';
import ToDoList from './components/ToDoList/ToDoList';
import Show from './components/Visible/Visible';

function App() {
  return (
    <div className="App">
      <Counter />
      <Show
        data="новый текст"
      />
      <Timer />
      <TextInput />
      <ToDoList />
      <CommentsList
      />
    </div>
  );
}

export default App;
