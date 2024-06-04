import './EventCard.css'
function EventCard({ name, description, date }) {

    return (<div className="card">
        <h2>{name}</h2>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <p>date: {date}</p>
    </div>);
}

export default EventCard;