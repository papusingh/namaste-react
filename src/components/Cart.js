import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispach = useDispatch();
  const clearCartItems = () => {
    dispach(clearCart());
  };

  console.log("cart item ", cartItems);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto p-5 border-spacing-2">
        <button
          className="m-5 p-2 rounded-lg bg-black text-white font-bold"
          onClick={clearCartItems}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Please add items to cart.</h1>
        )}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
