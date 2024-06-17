import './App.css';
import { createContext, useState } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer';
import Loading from './components/Loading';
import Counter from './components/Counter/Counter';
export const ThemeContext = createContext("white");
export const UserContext = createContext("Guest");

function App() {
  const [prevTheme, setTheme] = useState("white");
  const [user, setUser] = useState("Guest");


  function changeTheme() {
    setTheme((prevTheme) => {
      return prevTheme === "white" ? "black" : "white";
    });
  }
  function changeName(e) {
    let newUserName = e.target.closest("div").querySelector('input').value;
    setUser(newUserName);
    newUserName = "";

  }
  const withLoadingIndekator = (Component, isLoading) => {
    return (props) => {
      const newProps = { ...props, isLoading };
      return <Component {...newProps} />;
    };
  }
  const [isLoading, setLoading] = useState(true);
  const NewLoading = withLoadingIndekator(Loading, isLoading);

  setTimeout(() => {
    setLoading((prev) => !prev);
  }, 5000);



  return (
    <div className="App">
      <ThemeContext.Provider value={prevTheme}>
        <UserContext.Provider value={user}>
          <Header>
          </Header>
          <div>
            <input type="text" placeholder='Enter your name' />
            <button onClick={changeName}>Change Name</button>
          </div>
          <Profile />
          <button onClick={changeTheme}>Change Theme</button>
          <Footer />
          <NewLoading />
          <Counter />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
