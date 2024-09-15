import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantListData, setResturantListData] = useState([]);
  const [filteredResturantListData, setfilteredResturantListData] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error while calling api ", error);
    }
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      //here set the restorant data inside methoda
      //optional chaning
      setResturantListData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setfilteredResturantListData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("error while calling swiggy api ", error);
    }
  };

  // Conditional rending
  return resturantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              //filter the resturant card and update the ui
              const filteredResturant = resturantListData.filter(
                (resturant) => {
                  return resturant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setfilteredResturantListData(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResturantList = resturantListData.filter(
              (resturant) => resturant.info.avgRating > 4
            );
            setfilteredResturantListData(filteredResturantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturantListData.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
