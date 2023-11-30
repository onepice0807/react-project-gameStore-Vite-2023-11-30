import styled from 'styled-components';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright 2023. All rights reserved.</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
      </ul>
      {/* <img src="https://example.com/logo.png" alt="Logo" /> */}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  height: 100px;
  background-color: #000000;
  margin-bottom: 75px;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;
