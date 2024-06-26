import CatalogCards from "../components/Catalog/CatalogCards";
import Home from "../components/Home/Home";
import Header from "../layout/Header/Header";
import Info from "../layout/Info/Info";
import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="App ">
            <Header />
            <Home />
            <CatalogCards />
            <Info />
            <Form />
            <Footer />
        </div>);
}

export default HomePage;