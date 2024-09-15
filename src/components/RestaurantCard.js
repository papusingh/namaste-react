const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData
    ? resData
    : "";
  const time = resData.sla.deliveryTime;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <div className="res-details">
          <span className="res-rating">{avgRating} ⭐</span>
          <span className="res-time">{time} minutes</span>
        </div>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
