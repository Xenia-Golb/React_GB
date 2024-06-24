function CatalogItem({ img, title, description, price }) {
    return (<div className="catalogItem">
        {/* <img src={img} alt="" /> */}
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
    </div>);
}

export default CatalogItem;