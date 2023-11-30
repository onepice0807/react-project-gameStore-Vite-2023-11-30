import React from 'react';
import styled from 'styled-components';
import GameList from './GameList';

const ShopPage = () => {
  return (
    <Container>
      <GameList />
    </Container>
  );
};

export default ShopPage;

const Container = styled.div`
  display: row;
  width: 100%;
  height: 100vh;
`;
