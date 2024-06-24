import Button from "../../UI/Button/Button";
import "../Header/Header.css";
import headerLogo from "../../img/headerLogo.svg";
import headerMenu from "../../img/headerMenu.svg";
import headerSearch from "../../img/headerSearch.svg";
import headerUser from "../../img/headerUser.svg";
import headerCart from "../../img/headerCart.svg";




function Header() {
    return (<div className="header">
        <div className="headerLeft">
            <img src={headerLogo} alt="logo" />
            <img src={headerSearch} alt="logo" />
        </div>
        <div className="headerRight">
            <img src={headerMenu} style={{ marginRight: "20px", marginTop: "10px" }} alt="menu" />
            <img src={headerUser} alt="user" />
            <img src={headerCart} alt="cart" />

        </div>

    </div>);
}

export default Header;