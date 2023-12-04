import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";
import styled from "styled-components";

const CartPage = () => {
  const { cart, setCart } = useContext(GameContext);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);

  const removeCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Container>
      <h1>장바구니</h1>
      <div>
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item) => (
              <Items key={item.id} className="cart-item">
                <Image src={item.imageUrl[0]} />
                <span>
                  {item.name} - {item.price}
                </span>
                <Button onClick={() => removeCart(item.id)}>제거</Button>
              </Items>
            ))}
          </div>
        ) : (
          <p>장바구니가 비어있습니다.</p>
        )}
      </div>
    </Container>
  );
};

export default CartPage;

const Container = styled.div`
  align-items: center;
  margin: 20px;
  margin-bottom: 100px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #464646;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  & > span {
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 200px;
`;

const Button = styled.div`
  background-color: #007bff;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #5a85b3;
    color: white;
  }
`;
