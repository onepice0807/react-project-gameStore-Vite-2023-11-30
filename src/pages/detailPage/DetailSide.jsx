/* eslint-disable react/prop-types */
import { IoIosAddCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PurchaseModal from "./PurchaseModal";
import { FaWindows } from "react-icons/fa";
import { useState } from "react";

const DetailSide = ({
  addToWishlist,
  addToCart,
  isGameInWishlist,
  isGameInCart,
  gameDetail,
}) => {
  const [showModal, setShowModal] = useState(false); // 모달 창의 상태를 결정하는 State

  return (
    <Container>
      <NavigationBar>
        <Button onClick={() => setShowModal(true)}>지금 구매</Button>
        {showModal && (
          <PurchaseModal gameDetail={gameDetail} setShowModal={setShowModal} />
        )}
        {isGameInCart ? (
          <Link to="/shop/cart" style={{ textDecoration: "none" }}>
            <CartButton>장바구니로 이동</CartButton>
          </Link>
        ) : (
          <CartButton onClick={addToCart}>장바구니에 담기</CartButton>
        )}
        <WishButton onClick={addToWishlist}>
          {isGameInWishlist ? (
            <>
              <IoIosCheckmarkCircle />
              위시리스트에 포함됨
            </>
          ) : (
            <>
              <IoIosAddCircleOutline />
              위시리스트에 추가
            </>
          )}
        </WishButton>
        <Table>
          <tbody>
            <tr>
              <td>개발사</td>
              <td>{gameDetail.gameDeveloperId}</td>
            </tr>
            <tr>
              <td>퍼블리셔</td>
              <td>{gameDetail.gamePublisherId}</td>
            </tr>
            <tr>
              <td>출시일</td>
              <td>{gameDetail.lunchDate}</td>
            </tr>
            <tr>
              <td>플랫폼</td>
              <td>
                <FaWindows />
              </td>
            </tr>
          </tbody>
        </Table>
      </NavigationBar>
    </Container>
  );
};

export default DetailSide;

const Container = styled.div`
  top: auto;
  display: flex;
  padding-right: 100px;
  padding-bottom: 100px;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  & > button {
    margin: 10px; /* 버튼 사이의 간격 */
    width: 320px;
    height: 50px;
    border-radius: 10px;
    border-color: white;
    box-shadow: 1px 1px 2px 2px;
  }
  & > input {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
`;

const Button = styled.button`
  background-color: #4285f4;
  border-radius: 10px;
  border-color: #c7ddff;
  box-shadow: 1px 1px 2px 2px;
`;

const CartButton = styled.button`
  width: 320px;
  height: 50px;
  border-radius: 10px;
  border-color: #ffffff;
  box-shadow: 1px 1px 2px 2px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const WishButton = styled.button`
  width: 320px;
  height: 50px;
  border-radius: 10px;
  border-color: #ffffff;
  box-shadow: 1px 1px 2px 2px;
`;

const Table = styled.table``;
