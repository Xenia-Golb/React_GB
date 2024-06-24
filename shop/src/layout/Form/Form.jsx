import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./Form.css"

function Form() {
    return (<div className="subscribe">
        <div className="leftPart">

            <p className="subscribe__p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
        </div>
        <div className="rightPart">
            <h3>SUBSCRIBE</h3>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <form>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
            </form>
        </div>
    </div>);
}

export default Form;