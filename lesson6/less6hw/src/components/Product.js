


function Product({ title, price, description }) {

    return (
        <div className="product">
            <div className="product__info">

                <h3>{title}</h3>
                <p>{price}</p>
                <p>{description}</p>

            </div>


        </div>);
}

export default Product;