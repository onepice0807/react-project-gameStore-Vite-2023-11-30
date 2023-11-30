import React from 'react';
import styled from 'styled-components';
import GameList from './shop/GameList';

const BrowsePage = () => {
  return (
    <BrowseWrapper>
      <GameList />
    </BrowseWrapper>
  );
};

export default BrowsePage;

const BrowseWrapper = styled.div`
  height: 5000px;
`;
