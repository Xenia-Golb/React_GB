import './CartContainer.css';
import { cartData } from '../../data/cartData';
import CartItem from './CartItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Cart() {
    const [cartItems, setCartItems] = useState(cartData);

    // Функция для обновления количества товара
    const updateQuantity = (id, quantity) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCartItems(newCartItems);
    };

    // Подсчет общей стоимости товаров в корзине

    const totalCost = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    // Функция для удаления товара из корзины 
    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
    }

    // Функция для очистки корзины
    const removeCart = () => {
        setCartItems([]);
    }
    // Если корзина пуста, вывести сообщение об этом, иначе показать корзину с товарами и кнопками управления
    if (totalCost === 0) {
        return <div className="cart-empty">Your shopping cart is empty</div>;
    } else {
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
                        value={item.quantity}
                        onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                        }
                        onClick={() => removeFromCart(item.id)}
                    />
                ))}
                <div className="left-panel__btns">
                    <button className='left-panel__btn' onClick={removeCart}>CLEAR SHOPPING CART</button>
                    <Link to={'/catalog/'}> <button className='left-panel__btn'>CONTINUE SHOPPING</button>
                    </Link></div>

            </div>
            <div className="right-panel">
                <form className='cart-form' >
                    <input type="text" className='cart-input ' placeholder='Shipping Adress' />
                    <input type="text" className='cart-input ' placeholder='State' />
                    <input type="text" className='cart-input ' placeholder='Postcode / Zip' />
                    <button className='cart-form-btn'>get a quote</button>
                </form>
                <div className="total-block">
                    <div className="sub-total">SUB TOTAL:  {totalCost}</div>
                    <div className="grand-total">GRAND TOTAL :  {totalCost}</div>
                    <hr />
                    <button className='total-block-btn'>Proceed to Checkout</button>
                </div>
            </div>
        </section >);
    }
}
export default Cart;