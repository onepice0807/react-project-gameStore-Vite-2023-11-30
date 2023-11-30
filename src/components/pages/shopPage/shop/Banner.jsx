import React from 'react';
import GiftsPage from '../GiftsPage';
import BrowsePage from '../BrowsePage';
import ShopPage from './ShopPage';

export const Banner = ({ title, isSelected, onClick }) => {
  return (
    <div className={`banner ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {title}
    </div>
  );
};

const ShopContent = ({ selectedBanner }) => {
  switch (selectedBanner) {
    case 'Quest':
      return <ShopPage />;
    case 'Browse':
      return <BrowsePage />;
    case 'Gifts':
      return <GiftsPage />;
    default:
      return <ShopPage />;
  }
};

export default ShopContent;
