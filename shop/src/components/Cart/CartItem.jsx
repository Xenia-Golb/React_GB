function CartItem({ img, title, price, color, size, quantity }) {
    return (<div className="cart-item">
        <img src={img} alt="photo_cart_item" />
        <div className="item__details">
            <p className="item__name">{title}</p>
            <p className="item__price">{price}</p>
            <p className="item__color">{color}</p>
            <p className="item__size">{size}</p>
            <p className="item__quantity">{quantity}</p>
        </div>
    </div>);
}

export default CartItem;