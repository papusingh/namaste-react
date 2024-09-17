import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); //196047
  console.log("restaurantId - ", resId);
  useEffect(() => {
    //api call
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
    // console.log(json);
  };

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  //   const recomandedItemList =
  //     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards;

  const totalCardList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //   console.log(
  //     "res-info ",
  //     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  //   );

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
