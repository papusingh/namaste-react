const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData
    ? resData
    : "";
  const time = resData?.sla?.deliveryTime;
  return (
    <div className="m-4 p-2 w-[250px] h-[480px] rounded-lg hover:bg-slate-100">
      <img
        className="res-logo rounded-lg w-[250px] h-[300px]"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <div>
          <span>{avgRating} ⭐</span>
          <span>{time} minutes</span>
        </div>
        <h4>{cuisines?.join(", ")}</h4>
      </div>
    </div>
  );
};

//Higer order function
//input --> RestaurantCard ==> ResturantCardWithPromoted

export const withPromotedLevel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-white to-white text-orange-600 mx-6 my-4 px-2 rounded-lg font-bold">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
