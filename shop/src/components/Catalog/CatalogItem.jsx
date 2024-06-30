import { Link } from "react-router-dom";
import "./CatalogItem.css";
function CatalogItem({ img, title, description, price, size }) {
    const addProduct = () => {
        <Link to={'/cart'} >Add To Cart</Link>
    }
    return (
        <div className="catalogItem">
            <Link to={'/cart'} className="item__link"><img src={img} alt="" /> <button onClick={addProduct} className="item__btn">Add to Cart</button> </Link>
            <Link to={'/product'}><h3>{title}</h3></Link>
            <p className="item__description">{description}</p>
            <p className="item__price">{price}</p>
            <p className="item__size" >{size}</p>

        </div>);
}

export default CatalogItem;