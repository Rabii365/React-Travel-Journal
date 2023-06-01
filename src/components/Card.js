import pin from "../images/placeholder.png";

export default function Card(props) {
  return (
    /*<div className="card">
      {(props.cardItem.openSpots <= 0 ||
        props.cardItem.location === "Online") && (
        <div className="soldout">{badgeText}</div>
      )}
      <img className="photo-1" src={props.cardItem.coverImg} alt="" />
      <div className="lil-desc">
        <span>{props.cardItem.stats.rating}</span>
        <p>
          ({props.cardItem.stats.reviewCount}) • {props.cardItem.location}
        </p>
      </div>
      <p className="card-1desc">{props.cardItem.title}</p>
      <p>
        <span className="Bold">€ {props.cardItem.price}</span>/ per person
      </p>*/

    <div className="card-container">
      <div className="img-container">
        <img src={props.cardItem.imageUrl} alt="" />
      </div>
      <div className="description-container">
        <div className="top-desc-sect">
          <img src={pin} alt="" />
          <p>{props.cardItem.location}</p>
          <a href={props.cardItem.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <p className="mount">{props.cardItem.title}</p>
        <p className="date">
          {props.cardItem.startDate} - {props.cardItem.endDate}
        </p>
        <p className="about">{props.cardItem.description}</p>
      </div>
    </div>
    /*</div>*/
  );
}
