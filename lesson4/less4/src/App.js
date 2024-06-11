import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import DetailPage from './components/ListPages/DetailPage';
import ListPage from './components/ListPages/ListPage';
import HomePage from './components/hw/HomePage';
import AboutPage from './components/hw/AboutPage';



function App() {
  // const listLi = [
  //   { id: 1, name: 'Item 01' },
  //   { id: 2, name: 'Item 02' },
  //   { id: 3, name: 'Item 03' }
  // ]
  // const creater = () => {
  //   return (
  //     <ul>
  //       {listLi.map((item) =>
  //         <li key={item.id}>{item.name}</li>)}
  //     </ul>)
  // }


  return (
    <div className="App">
      {/* <Box>
        <h1>Title1</h1>
        <p>Text1</p>
      </Box>
      <Box>
        <h1>Title2</h1>
        <p>Text2</p>
      </Box>
      <List
        creater={creater()}
        style={
          {
            color: 'blue',
            fontSize: '20px'
          }
        }
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
