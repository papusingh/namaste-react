import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {
  const { resId } = useParams(); //196047
  console.log("restaurantId - ", resId);
  const resInfo = useRestaurantmenu(resId);
  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  const totalCardList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {totalCardList.map((item, index) => {
          return (
            <ul key={index}>
              {item?.card?.card?.itemCards?.map((element) => {
                return (
                  <li key={element.card.info.id}>
                    {element.card.info.name} -{" "}
                    {parseInt(element.card.info.price / 100)}
                  </li>
                );
              })}
              <li>......................................</li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
