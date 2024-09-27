import RestaurantCard, { withPromotedLevel } from "./RestaurantCard";
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

  const ResturantCardPromoted = withPromotedLevel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline, Please check your internet connection{" "}
      </h1>
    );
  }

  // Conditional rending
  return resturantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search my-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md pl-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-4 px-4 py-2 bg-orange-400 rounded-lg"
            onClick={() => {
              filterResturantBySearch;
            }}
          >
            Search
          </button>
        </div>
        <div className=" flex justify-center">
          <button
            className="bg-orange-400 mx-4 px-4 py-2 mb-4 rounded-lg text-center shadow-lg"
            onClick={() => {
              filterTopRatedResturants;
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturantListData.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            {resturant?.info?.veg ? (
              <ResturantCardPromoted resData={resturant.info} />
            ) : (
              <RestaurantCard resData={resturant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
