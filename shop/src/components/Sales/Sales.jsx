import SalesCard from "./SalesCard";
import "./Sales.css";
import kid from "../../img/kid.png";
import woman from "../../img/woman.png";
import man from "../../img/man.png";
import allTh from "../../img/allTh.png";


function Sales() {
    return (
        <>
            <div className="sales center">
                <SalesCard
                    img={woman}
                    text={`30% OFF <span>FOR WOMEN</span>`}
                />
                <SalesCard
                    img={man}
                    text={`HOT DEAL <span> FOR MEN</span>}`}
                />
                <SalesCard
                    img={kid}
                    text={`NEW ARRIVALS <span> FOR KIDS</span>`}
                />
                <SalesCard
                    className="card_last"
                    img={allTh}
                    text={`SHOP <span>ALL THINGS</span>`} />
            </div>

        </>);
}

export default Sales;