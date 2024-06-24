function SalesCard({ img, text, className }) {
    return (
        <div className="card">
            <img className="card__img" src={img} alt="" />
            <p className="card__text">{text}</p>
        </div>);
}

export default SalesCard;