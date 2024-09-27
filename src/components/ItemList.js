const ItemList = (props) => {
  const items = props.items;
  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-gray-300 border-b-2 mb-4"
        >
          <div className="text-left my-2 py-4 mb-4 w-8/12">
            <div>
              <div className="font-bold text-black">
                {item?.card?.info?.name}
              </div>
              <div className="from-neutral-950 text-black mb-2 pb-2">
                {"₹"}
                {item?.card?.info?.price / 100}
              </div>
              <div className="font-bold text-green-600 text-sm">
                {"⭐ "}
                {item?.card?.info?.ratings?.aggregatedRating?.rating} {"(5)"}
              </div>
              <p className="font-light text-sm">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div>
            <img
              className="res-logo rounded-lg bg-gray-200 w-[150px] h-[120px]"
              alt="res-logo"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                item?.card?.info?.imageId
              }
            />
            <button className="p-2 bg-white shadow-lg rounded-lg font-bold text-green-400 w-20 mb-4">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
