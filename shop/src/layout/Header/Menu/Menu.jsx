
import "./Menu.css"
function Menu({ visible }) {
    if (!visible) {
        return null;
    }
    return (
        <div className="browse__buttom__box">
            <h3 className="browse__buttom__box__title">Menu</h3>
            <h3 className="browse__buttom__box__tit">Women</h3>
            <a href="#" className="browse__buttom__box__link"> Dresses</a>
            <a href="#" className="browse__buttom__box__link">Tops</a>
            <a href="#" className="browse__buttom__box__link">Sweaters/Knits</a>
            <a href="#" className="browse__buttom__box__link">Jackets/Coats</a>
            <a href="#" className="browse__buttom__box__link">Blazers</a>
            <a href="#" className="browse__buttom__box__link">Denim</a>
            <a href="#" className="browse__buttom__box__link">Leggings/Pants</a>
            <a href="#" className="browse__buttom__box__link">Skirts/Shorts</a>
            <a href="#" className="browse__buttom__box__link">Accessories</a>
            <h3 className="browse__buttom__box__tit">Men</h3>
            <a href="#" className="browse__buttom__box__link"> Tees/Tank tops</a>
            <a href="#" className="browse__buttom__box__link">Shirts/Polos</a>
            <a href="#" className="browse__buttom__box__link">Sweaters</a>
            <a href="#" className="browse__buttom__box__link">Sweatshirts/Hoodies</a>
            <a href="#" className="browse__buttom__box__link">Blazers</a>
            <a href="#" className="browse__buttom__box__link">Jackets/vests</a>
        </div>
    );
}

export default Menu;