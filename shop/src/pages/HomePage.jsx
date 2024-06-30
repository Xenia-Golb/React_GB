import CatalogCards from "../components/Catalog/CatalogCards";
import Home from "../components/Home/Home";
import Header from "../layout/Header/Header";
import Info from "../layout/Info/Info";
import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Sales from "../components/Sales/Sales";


function HomePage() {
    return (
        <div className="App ">
            <Header />
            <Home />
            <Sales />
            <CatalogCards />
            <Info />
            <Form />
            <Footer />
        </div>);
}

export default HomePage;