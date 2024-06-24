
import { Provider } from 'react-redux';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Products</h1>
        <AddProduct />
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
