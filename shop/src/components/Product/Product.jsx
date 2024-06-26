import { Link } from 'react-router-dom';
import imgContent from '../../img/img_content.png'
import './Product.css';

function Product() {
    return (<section className="product center">
        <img className='product-img' src={imgContent} alt="photo_girl" />
        <div className="container-product">
            <h2>WOMEN COLLECTION</h2>
            <h3>MOSCHINO CHEAP AND CHIC</h3>
            <p className='product-info'>Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
            <p className='product-price'>$561</p>
            <hr style={{ width: '300px', margin: '0 auto' }} />
            <div className="select-container">
                <select name="color" id="color">
                    <option value="allColor">CHOOSE COLOR</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                </select>
                <select name="size" id="size">
                    <option value="allSize">CHOOSE SIZE</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
                <select name="quantity" id="quantity">
                    <option value="quantity">Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <Link to='/cart/'>
                <button className='product-btn'>ADD TO CART</button></Link>

        </div>
    </section>);
}

export default Product;