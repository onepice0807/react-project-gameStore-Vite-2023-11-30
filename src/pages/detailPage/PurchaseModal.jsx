/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const PurchaseModal = ({ gameDetail, setShowModal, total }) => {
  // 상태 초기화 먼저
  const [paymentOption, setPaymentOption] = useState("");

  // gameDetail이 배열인지 객체인지 확인
  const isMultiple = Array.isArray(gameDetail);
  // itemsToDisplay 초기화
  const itemsToDisplay = isMultiple ? gameDetail : [gameDetail];

  // 결제 처리 함수
  const handlePayment = () => {
    // 결제 로직 구현...
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CarouselContainer>
          {itemsToDisplay.map((item, index) => (
            <GameInfoCard key={index}>
              <GameImage src={item.imageUrl[0]} alt={item.name} />
              <GameTitle>{item.name}</GameTitle>
              <GamePrice>가격: ₩{item.price}</GamePrice>
              {/* 할인 정보와 다른 게임 정보를 추가할 수 있습니다 */}
            </GameInfoCard>
          ))}
        </CarouselContainer>
        <TotalPrice>총 가격: ₩{total.toLocaleString()}</TotalPrice>
        <PaymentOptions>
          <RadioButton
            type="radio"
            name="payment"
            value="creditCard"
            onChange={(e) => setPaymentOption(e.target.value)}
          />
          <label>신용카드</label>
          <RadioButton
            type="radio"
            name="payment"
            value="kakaoPay"
            onChange={(e) => setPaymentOption(e.target.value)}
          />
          <label>카카오페이</label>
          {/* 다른 결제 옵션을 추가합니다. */}
        </PaymentOptions>
        <Button onClick={handlePayment}>결제하기</Button>
        <Button onClick={() => setShowModal(false)}>닫기</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default PurchaseModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  color: white;
  width: 80%;
  max-height: 100%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background: #464646;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%; // 너비를 화면의 80%로 설정
  margin: auto; // 중앙 정렬
  overflow-x: hidden;
`;

const GameInfoCard = styled.div`
  background-color: white;
  color: black;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameImage = styled.img`
  width: 300px; // 이미지 크기 조정
  border-radius: 10px; // 이미지 둥근 모서리 적용
`;

const GameTitle = styled.h2`
  font-weight: bold;
`;

const GamePrice = styled.p`
  // 게임 가격 스타일링 필요
`;

const TotalPrice = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto; // 가로 스크롤
  scroll-snap-type: x mandatory; // 스크롤 스냅
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; // 패딩을 너비에 포함
`;

const PaymentOptions = styled.div`
  // 결제 옵션 스타일링
`;

const RadioButton = styled.input`
  // 라디오 버튼 스타일링
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
