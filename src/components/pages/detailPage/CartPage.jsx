import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const CartPage = () => {
  const { cart } = useContext(GameContext);
  console.log(GameContext);

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>장바구니가 비어있습니다.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
