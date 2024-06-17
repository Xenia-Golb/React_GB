import './card.css'
function Card({ children }) {
    return (<>
        <div className="card">
            {children}
            <button>add</button>
            <button>delete</button>
        </div>
    </>);
}

export default Card;