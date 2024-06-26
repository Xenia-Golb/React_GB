import './styles/ProductPage.css';
import Product from "../components/Product/Product";
import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Header from "../layout/Header/Header";
import { catalogData } from "../data/catalogData";
import CatalogItem from "../components/Catalog/CatalogItem";
import { Link } from 'react-router-dom';

function ProductPage() {

    return (<section>
        <Header />
        <Product />
        <div className='product-cards'>
            {catalogData.slice(0, 3).map(item => {
                return <CatalogItem
                    key={item.id}
                    img={item.img}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                />
            })}</div>
        <Form />
        <Footer />
    </section>);
}

export default ProductPage;