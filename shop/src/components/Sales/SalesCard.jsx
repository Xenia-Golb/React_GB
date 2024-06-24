function SalesCard({ img, text, className }) {
    return (
        <div className="card">
            <img src={img} alt="" />
            <p>{text}</p>
        </div>);
}

export default SalesCard;