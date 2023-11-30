import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { GAMES } from "../../data/Game";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import DetailSide from "./DetailSide";
import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";

const GameDetailPage = () => {
  const { gameId } = useParams();
  const gameDetail = GAMES.find((game) => game.id.toString() === gameId);
  const { wishlist, setWishlist, cart, setCart } = useContext(GameContext);

  const isGameInWishlist = wishlist.some((item) => item.id === gameDetail.id);

  const addToCart = () => {
    if (!cart.some((item) => item.id === gameDetail.id)) {
      setCart([...cart, gameDetail]);
    }
  };

  const addToWishlist = () => {
    const updatedWishlist = isGameInWishlist
      ? wishlist.filter((item) => item.id !== gameDetail.id)
      : [...wishlist, gameDetail];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

  if (!gameDetail) {
    return <div>해당 게임을 찾을 수 없습니다!!!</div>;
  }

  return (
    <Container>
      <DetailMain>
        <NavigationBar>
          <button
            onClick={() => {
              /* 탐색 관련 함수 넣을공간 */
            }}
          >
            탐색
          </button>
          <button
            onClick={() => {
              /* 찾아보기 관련 함수 넣을공간 */
            }}
          >
            찾아보기
          </button>
          <button
            onClick={() => {
              /* 새소식 관련 함수 넣을공간 */
            }}
          >
            새소식
          </button>
          <input type="text" placeholder="검색..." />
        </NavigationBar>
        <h1>{gameDetail.name}</h1>
        <Carousel>
          {gameDetail.imageUrl.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </DetailMain>
      <DetailSide
        addToWishlist={addToWishlist}
        addToCart={addToCart}
        isGameInWishlist={isGameInWishlist}
      />
    </Container>
  );
};

export default GameDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  margin-bottom: 100px;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  & > button {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
  & > input {
    margin-left: 10px; /* 버튼 사이의 간격 */
  }
`;

const DetailMain = styled.div`
  width: 50%;
  margin: auto;
`;
