import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(MENU_API + resId);
    const json = data.json();
    json.then((result) => {
      setResInfo(result);
    });
  };

  return resInfo;
};

export default useRestaurantmenu;
