import { IoIosAddCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const DetailSide = ({ addToWishlist, addToCart, isGameInWishlist }) => {
  return (
    <Container>
      <NavigationBar>
        <Button
          onClick={() => {
            /* 구매 관련 함수 넣을공간 */
          }}
        >
          지금 구매
        </Button>
        <button onClick={addToCart}>장바구니에 담기</button>
        <button onClick={addToWishlist}>
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
        </button>
        <table>
          <tbody>
            <tr>
              <td>a</td>
              <td>a</td>
            </tr>
            <tr>
              <td>a</td>
              <td>a</td>
            </tr>
            <tr>
              <td>a</td>
              <td>a</td>
            </tr>
            <tr>
              <td>a</td>
              <td>a</td>
            </tr>
          </tbody>
        </table>
      </NavigationBar>
    </Container>
  );
};

export default DetailSide;

const Container = styled.div`
  top: auto;
  display: flex;
  padding-right: 100px;
  padding-bottom: 1100px;
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
