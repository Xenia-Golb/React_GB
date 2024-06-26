import './Cart.css';
import { cartData } from '../../data/cartData';
function Cart() {
    return (<section className="cart">
        <div className="left-panel">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cartData.map((item) => {
                    return (
                        <div className="cart-item" key={item.id}>
                            <img src={item.img} alt="photo_cart_item" />
                            <div className="item__details">
                                <p className="item__name">{item.name}</p>
                                <p className="item__price">{item.price}</p>
                                <p className="item__color">{item.color}</p>
                                <p className="item__size">{item.size}</p>
                                <p className="item__quantity">{item.quantity}</p>
                            </div>
                        </div>);
                })}
            </div>
            <button>CLEAR SHOPPING CART</button>
            <button>CONTINUE SHOPPING</button>
        </div>
        <div className="right-panel">
            <form action="">
                <input type="text" placeholder='Shipping Adress' />
                <input type="text" placeholder='State' />
                <input type="text" placeholder='Postcode / Zip' />
                <button>get a quote</button>
            </form>
            <div className="total-block">
                <div className="sub-total"></div>
                <div className="grand-total"></div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    </section>);
}

export default Cart;