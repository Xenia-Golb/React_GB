import { Link } from 'react-router-dom';
import './Form.css';

function Form() {
    return (<div className="subscribe ">
        <div className="leftPart ">
            <p className="subscribe__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
        </div>
        <div className="rightPart">
            <h3>SUBSCRIBE</h3>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <form className='form'>
                <input type="text" placeholder="Enter your email" />
                <Link to={'/registration/'}><button>Subscribe</button></Link>
            </form>
        </div>
    </div>);
}

export default Form;