import './CartItem.css'
function CartItem({ img, title, price, color, size, quantity, value, onChange, onClick }) {
    return (<div className="cart-item">
        <img className="item__image" src={img} alt="photo_cart_item" />
        <div className="item__details">
            <p className="item__name">{title}</p>

            <p className="item__price">Price: {price}</p>
            <p className="item__color">Color: {color}</p>
            <p className="item__size">Size: {size}</p>
            <p className="item__quantity">Quantity: {quantity}</p>
            <input
                className="item__quantity"
                type="number"
                min="1"
                value={value}
                onChange={onChange} />
        </div><button onClick={onClick} className="item_btn">X</button></div>
    );
}

export default CartItem;