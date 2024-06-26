import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/" element={<ProductPage />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
