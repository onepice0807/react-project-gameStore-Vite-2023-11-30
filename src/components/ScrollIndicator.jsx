import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const ScrollIndicator = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const sectionElements = sections.map((id) => document.getElementById(id));
    const scrollTop = window.scrollY;

    const currentSectionIndex = sectionElements.findIndex((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      return scrollTop >= sectionTop && scrollTop < sectionBottom;
    });

    setActiveIndex(currentSectionIndex);
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = useCallback((index) => {
    const sectionId = `section-${index}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`No element with id ${sectionId} found`);
    }
  }, []);

  return (
    <ScrollIndicatorContainer>
      {sections.map((_, index) => (
        <ScrollIndicatorDot
          key={index}
          active={index === activeIndex}
          onClick={() => scrollToSection(index)} // 점 클릭 핸들러 추가
        />
      ))}
    </ScrollIndicatorContainer>
  );
};

export default ScrollIndicator;

// 스타일 컴포넌트
const ScrollIndicatorContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px; // 컨테이너 높이를 늘림
`;

const ScrollIndicatorDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 4px 0;
  background-color: ${(props) => (props.active ? '#fff' : '#555')};
  border-radius: 50%;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(${(props) => (props.active ? 1.5 : 1)});
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  &:hover {
    transform: scale(1.5);
    opacity: 1;
  }
  flex: 1; // 각 점을 컨테이너 안에서 똑같은 공간만큼 차지하도록 함
`;
