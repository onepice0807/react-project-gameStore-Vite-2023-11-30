import { Link, useParams } from "react-router-dom";
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

  const isGameInCart = cart.some((item) => item.id === gameDetail.id);

  const addToCart = () => {
    let updatedCart;
    if (!isGameInCart) {
      updatedCart = [...cart, gameDetail];
    } else {
      updatedCart = cart.filter((item) => item.id !== gameDetail.id);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToWishlist = () => {
    const updatedWishlist = isGameInWishlist
      ? wishlist.filter((item) => item.id !== gameDetail.id)
      : [...wishlist, gameDetail];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
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
        <div>{gameDetail.description}</div>
        <Content>
          <div>장르</div>
          <ul>
            {gameDetail.genre.map((genre, index) => (
              <li key={index}>
                <Link to={`/shop/genre/${genre}`}>{genre}, </Link>
                {/* 선택한 장르 모음 리스트로 이동 */}
              </li>
            ))}
          </ul>
          <div>기능</div>
          <ul>
            {gameDetail.function.map((functions, index) => (
              <li key={index}>
                <Link to={`/shop/function/${functions}`}>{functions}, </Link>
                {/* 선택한 기능 모음 리스트로 이동 */}
              </li>
            ))}
          </ul>
        </Content>
      </DetailMain>
      <DetailSide
        addToWishlist={addToWishlist}
        addToCart={addToCart}
        isGameInWishlist={isGameInWishlist}
        isGameInCart={isGameInCart}
        gameDetail={gameDetail}
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

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  & > div {
    border-left: solid 1px #484848;
    font-weight: bold;
    padding: 10px;
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 1px;
  }
`;
