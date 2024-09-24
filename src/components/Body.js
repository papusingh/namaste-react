import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBody from "../utils/useBody.js";

const Body = () => {
  const {
    resturantListData,
    filteredResturantListData,
    searchText,
    setSearchText,
    filterResturantBySearch,
    filterTopRatedResturants,
  } = useBody();

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline, Please check your internet connection{" "}
      </h1>
    );
  }

  console.log("res ", resturantListData);

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
              filterResturantBySearch;
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterTopRatedResturants;
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturantListData.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            <RestaurantCard resData={resturant.info} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
