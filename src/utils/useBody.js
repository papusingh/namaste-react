import { useEffect, useState } from "react";

const useBody = () => {
  const [resturantListData, setResturantListData] = useState([]);
  const [filteredResturantListData, setfilteredResturantListData] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //here set the resturant data
      const resturants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResturantListData(resturants);
      setfilteredResturantListData(resturants);
    } catch (error) {
      console.error("error while calling api inside body  ", error);
    }
  };

  //filter resturant based on search text
  const filterResturantBySearch = () => {
    const filtered = resturantListData.filter((resturant) => {
      resturant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredResturantListData(filtered);
  };

  //filter top-rated resturants
  const filterTopRatedResturants = () => {
    const filtered = resturantListData.filter((resturant) => {
      resturant.info.avgRating > 4;
    });
    setfilteredResturantListData(filtered);
  };

  return {
    resturantListData,
    filteredResturantListData,
    searchText,
    setSearchText,
    filterResturantBySearch,
    filterTopRatedResturants,
  };
};

export default useBody;
