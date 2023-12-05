/* eslint-disable react/prop-types */

import styled from "styled-components";

// 각 게임 아이템의 출시일이 오늘보다 미래인지 확인하는 함수
const isReleaseDateInFuture = (releaseDate) => {
  const releaseDateDetail = new Date(releaseDate);
  const currentDateDetail = new Date();
  return releaseDateDetail > currentDateDetail;
};

const removeCart = (id, cart, setCart) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const CartItem = ({ item, cart, setCart }) => {
  return (
    <Items key={item.id} className="cart-item">
      <Image src={item.imageUrl[0]} />
      <div>
        <span>{item.name}</span>
        {/* 출시일이 오늘보다 미래인 경우 '출시 예정' 및 가격 표시, 그렇지 않으면 가격 표시 */}
        {isReleaseDateInFuture ? (
          <>
            <span>₩{item.price}</span>
            <span> - {item.lunchDate} 출시 예정 - </span>
          </>
        ) : (
          <span>₩{item.price}</span>
        )}
      </div>
      <Button onClick={() => removeCart(item.id, cart, setCart)}>제거</Button>
    </Items>
  );
};

export default CartItem;

const Items = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #464646;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
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
