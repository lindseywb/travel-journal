export default function Card(props) {
    const cardPhoto = require(`../img/${props.item.photo}`).default;
    return(
        <div className="card">
            <div className="card-photo">
                <img src={cardPhoto} alt={props.item.title} />
            </div>
            <div className="card-content">
                <div className="card-location_info">
                    <span className="card-location_country">{props.item.country}</span>
                    <a href={props.item.mapsLink}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.item.title}</h1>
                <h3 className="entry-dates">{props.item.dates}</h3>
                <p className="entry-summary">{props.item.summary}</p>
            </div>
        </div>
    )    
};
