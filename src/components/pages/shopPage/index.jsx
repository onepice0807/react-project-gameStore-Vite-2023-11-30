import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import ShopContent, { Banner } from './shop/Banner';

const Shop = () => {
  const navigate = useNavigate();
  const [selectedBanner, setSelectedBanner] = useState('Quest');

  const handleBannerClick = (banner) => {
    setSelectedBanner(banner);
    if (banner === 'Quest') {
      navigate('/shop');
    } else {
      navigate(`/shop/${banner.toLowerCase()}`);
    }
  };

  return (
    <>
      <div className="banners-container">
        <Banner
          title="탐색"
          isSelected={selectedBanner === 'Quest'}
          onClick={() => handleBannerClick('Quest')}
        />
        <Banner
          title="찾아보기"
          isSelected={selectedBanner === 'Browse'}
          onClick={() => handleBannerClick('Browse')}
        />
        <Banner
          title="Gifts"
          isSelected={selectedBanner === 'Gifts'}
          onClick={() => handleBannerClick('Gifts')}
        />
      </div>
      <ShopContent selectedBanner={selectedBanner} />
    </>
  );
};

export default Shop;
