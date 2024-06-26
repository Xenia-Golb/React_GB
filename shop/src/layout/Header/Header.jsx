import "../Header/Header.css";
import headerLogo from "../../img/headerLogo.svg";
import headerMenu from "../../img/headerMenu.svg";
import headerSearch from "../../img/headerSearch.svg";
import headerUser from "../../img/headerUser.svg";
import headerCart from "../../img/headerCart.svg";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const handlerVisible = () => {
        setVisibleMenu((prevState) => !prevState);
    }
    return (<div className="header">
        <div className="headerLeft">
            <Link to={'/'}>
                <img className='headerLogo' src={headerLogo} alt="logo" />
            </Link>
            <img src={headerSearch} alt="logo" />
        </div>
        <div className="headerRight">
            <img src={headerMenu}
                onClick={handlerVisible} style={{ marginRight: "20px", marginTop: "10px" }} alt="menu" />
            <Link to={'/registration/'}><img src={headerUser} alt="user" /></Link>
            <Link to={'/cart/'}>
                <img src={headerCart} alt="cart" />
            </Link>
            <Menu visible={visibleMenu} />

        </div>

    </div>);
}

export default Header;