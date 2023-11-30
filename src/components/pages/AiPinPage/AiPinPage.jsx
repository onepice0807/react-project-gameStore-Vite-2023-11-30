import ScrollIndicator from '../../ScrollIndicator';
import styled from 'styled-components';
import React from 'react';

const AiPinPage = () => {
  const sections = ['section1', 'section2', 'section3', 'section4'];
  return (
    <div className="app-content">
      <div>
        {sections.map((sectionId, index) => (
          <Section id={sectionId} key={index}>
            {`Section ${index + 1}`}
          </Section>
        ))}
        <ScrollIndicator sections={sections} />
      </div>
      <div className="footer-order">
        <button type="button">Order</button>
        <span>Starting at $699</span>
      </div>
    </div>
  );
};

export default AiPinPage;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
