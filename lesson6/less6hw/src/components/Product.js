import { removeProduct } from "../actions/productsAction";


function Product({ title, price, description }) {
    return (
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                <p>{price}</p>
                <p>{description}</p>

            </div>
            <button onClick={removeProduct}>Delete</button>

        </div>);
}

export default Product;