
import "./Sales.css";



function Sales() {
    return (
        <>
            <div className="sale__top">
                <div className="sale__item sale__item_1">
                    <p className="sale__text">30% OFF</p>
                    <h3 className="sale__heading">FOR WOMEN</h3>
                </div>
                <div className="sale__item sale__item_2">
                    <p className="sale__text">HOT DEAL</p>
                    <h3 className="sale__heading">FOR MEN</h3>
                </div>
                <div className="sale__item sale__item_3">
                    <p className="sale__text">NEW ARRIVALS</p>
                    <h3 className="sale__heading">FOR KIDS</h3>
                </div>
            </div>
            <div className="sale__bottom">
                <p className="sale__text">LUXIROUS & TRENDY</p>
                <h3 className="sale__heading">ACCESORIES</h3>
            </div>

        </>);
}

export default Sales;