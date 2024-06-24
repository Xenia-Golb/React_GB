import InfoItem from "./InfoItem";
import "./Info.css";
import f1 from "../../img/f1.png";
import f2 from "../../img/f2.png";
import f3 from "../../img/f3.png";

function Info() {
    return (<div className="info center">
        <InfoItem
            img={f1}
            tit={'Free Delivery'}
        />
        <InfoItem
            img={f2}
            tit={'Sales & discounts'}

        />
        <InfoItem
            img={f3}
            tit={'Quality assurance'}
        />

    </div>);
}

export default Info;