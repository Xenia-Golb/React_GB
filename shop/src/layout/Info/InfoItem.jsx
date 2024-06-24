import "./Info.css"
function InfoItem({ img, tit }) {
    return (
        <div className="infoItem">
            <img src={img} alt="logo" />
            <h3>{tit}</h3>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tionwithextensive models.</p>
        </div>);
}

export default InfoItem;