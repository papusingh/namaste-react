const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cusine, rating, time, imgUrl } = resData ? resData : "";
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={imgUrl} />
      <div className="res-info">
        <h3 className="res-name">{resName}</h3>
        <h4 className="res-cuisine">{cusine}</h4>
        <div className="res-details">
          <span className="res-rating">{rating} ⭐</span>
          <span className="res-time">{time} minutes</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
