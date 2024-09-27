import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [flag, setFlag] = useState(true);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  const totalCardList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center">
      <h1 className="text-lg font-bold my-6">{name}</h1>
      <p className="text-lg font-bold mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {totalCardList.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              showIndex !== index ? setShowIndex(index) : setShowIndex(null);
            }}
          />
        );
      })}
    </div>
  );
};

export default ResturantMenu;
