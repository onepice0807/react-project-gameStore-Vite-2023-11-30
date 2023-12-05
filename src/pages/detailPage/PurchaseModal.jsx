/* eslint-disable react/prop-types */
import styled from "styled-components";

const PurchaseModal = ({ gameDetail, setShowModal }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>{gameDetail.name}</h2>
        {/* 여기에 추가 정보 표시 */}
        <button onClick={() => setShowModal(false)}>닫기</button>
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
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
