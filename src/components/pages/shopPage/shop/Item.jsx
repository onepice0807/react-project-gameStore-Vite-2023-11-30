import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

const Item = ({ product }) => {
  return (
    <ItemWrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        slide="true"
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
      >
        {product.imageUrl.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`${product.name} - Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2>{product.name}</h2>
      <p>{product.color}</p>
      <p>{product.price}</p>
      <p>{product.delivery}</p>
    </ItemWrapper>
  );
};

export default Item;

const ItemWrapper = styled.div`
  width: 700px;
`;
