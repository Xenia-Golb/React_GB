
import './App.css';
import CatalogCards from './components/Catalog/CatalogCards';

import Home from './components/Home/Home';
import Sales from './components/Sales/Sales';
import Footer from './layout/Footer/Footer';
import Form from './layout/Form/Form';
import Header from './layout/Header/Header';
import Info from './layout/Info/Info';

function App() {
  return (
    <div className="App ">
      <Header />
      <Home />
      <CatalogCards />
      <Info />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
