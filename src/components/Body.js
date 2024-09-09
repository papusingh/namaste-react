import RestaurantCard from "./RestaurantCard";
import { resturantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resturantListData, setResturantListData] = useState(resturantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResturantList = resturantListData.filter(
              (resturant) => resturant.rating > 4
            );
            setResturantListData(filteredResturantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resturantListData.map((resturant) => (
          <RestaurantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
