import "./CatalogCards.css"
function CatalogItem({ img, title, description, price }) {
    return (
        <div className="catalogItem">

            <img src={img} alt="" />
            <h3>{title}</h3>
            <p className="item__description">{description}</p>
            <p className="item__price">{price}</p>
            <button className="item__btn">Add to Cart</button>
        </div>);
}

export default CatalogItem;