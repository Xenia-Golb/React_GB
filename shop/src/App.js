import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import RegistrationPage from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/" element={<ProductPage />} />
        <Route path="/cart/" element={<CartPage />} />
        <Route path="/catalog/" element={<CatalogPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
