import './CartContainer.css';
import { cartData } from '../../data/cartData';
import CartItem from './CartItem';
function Cart() {
    return (<section className="cart center">
        <div className="left-panel">
            {cartData.map((item) => (
                <CartItem
                    key={item.id}
                    title={item.name}
                    img={item.img}
                    price={item.price}
                    color={item.color}
                    size={item.size}
                    quantity={item.quantity}
                />
            ))}
            <div className="left-panel__btns">
                <button className='left-panel__btn'>CLEAR SHOPPING CART</button>
                <button className='left-panel__btn'>CONTINUE SHOPPING</button>
            </div>

        </div>
        <div className="right-panel">
            <form className='cart-form' >
                <input type="text" className='cart-input ' placeholder='Shipping Adress' />
                <input type="text" className='cart-input ' placeholder='State' />
                <input type="text" className='cart-input ' placeholder='Postcode / Zip' />
                <button className='cart-form-btn'>get a quote</button>
            </form>
            <div className="total-block">
                <div className="sub-total">SUB TOTAL $900</div>
                <div className="grand-total">GRAND TOTAL      $900</div>
                <hr />
                <button className='total-block-btn'>Proceed to Checkout</button>
            </div>
        </div>
    </section >);
}

export default Cart;