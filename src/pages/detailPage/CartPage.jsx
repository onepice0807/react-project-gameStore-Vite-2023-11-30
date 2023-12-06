import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameContext";
import CartItem from "./CartItem";
import PurchaseModal from "./PurchaseModal";

const CartPage = () => {
  const { cart, setCart } = useContext(GameContext);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false); // 모달 창의 상태를 결정하는 State
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // 결제를 위한 useEffect
    const taxRate = 0.1; // 세금 10%
    const subtotal = cart.reduce((acc, item) => {
      const priceWithoutComma = item.price.replace(/,/g, "");
      const priceNumber = parseInt(priceWithoutComma, 10);
      return acc + priceNumber;
    }, 0);
    const taxAmount = subtotal * taxRate;
    setSubtotal(subtotal);
    setTax(taxAmount);
    setTotal(subtotal + taxAmount);
  }, [cart]);

  useEffect(() => {
    // 장바구니 리스트를 위한 useEffect
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [setCart]);

  const handlePurchaseClick = () => {
    setSelectedItem(cart);
    setShowModal(true);
  };

  return (
    <PageLayout>
      <LeftSection>
        <Container>
          <h1>장바구니</h1>
          <div>
            {cart.length > 0 ? (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`cart-${index}`}
                    item={item}
                    cart={cart}
                    setCart={setCart}
                  />
                ))}
              </div>
            ) : (
              <p>장바구니가 비어있습니다.</p>
            )}
          </div>
        </Container>
      </LeftSection>
      <RightSection>
        <h2>게임 및 앱 합계</h2>
        <CartSummary>
          <div>가격: ₩{subtotal.toLocaleString()}</div>
          <div>세금(10%): ₩{tax.toLocaleString()}</div>
          <div>총액: ₩{total.toLocaleString()}</div>
          <Button onClick={handlePurchaseClick}>결제하기</Button>
          {showModal && (
            <PurchaseModal
              total={total}
              gameDetail={selectedItem}
              setShowModal={setShowModal}
            />
          )}
        </CartSummary>
      </RightSection>
    </PageLayout>
  );
};

export default CartPage;

const PageLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 1; // 왼쪽 섹션
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 0.5; // 오른쪽 섹션
  padding-top: 125px;
  padding-left: 60px;
`;

const Container = styled.div`
  align-items: center;
  margin: 20px;
  margin-bottom: 100px;
  padding-left: 100px;
`;

const Button = styled.button`
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

const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  padding: 10px;
  border: solid 1px;
  border-radius: 10px;
  background: #464646;
  color: white;
`;
