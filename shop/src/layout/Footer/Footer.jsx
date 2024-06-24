
import brand2 from "../../img/brand2.svg";
import brand3 from "../../img/brand3.svg";
import brand4 from "../../img/brand4.svg";
import "./Footer.css"
function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__tit">© 2017 Brand All Rights Reserved.</h3>
            <div className="footer__brands">
                <img src={brand2} alt="logo" />
                <img src={brand2} alt="logo" />
                < img src={brand3} alt="logo" />
                <img src={brand4} alt="logo" />
            </div>
        </footer>);
}

export default Footer;