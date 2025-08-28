import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: string;
  background?: string;
  fullHeight?: boolean;
}

const StyledSection = styled.section<{
  $padding?: string;
  $background?: string;
  $fullHeight?: boolean;
}>`
  padding: ${props => props.$padding || '120px 0 80px 0'};
  background: ${props => props.$background || '#1a1a1a'};
  ${props => props.$fullHeight && 'height: 100vh; display: flex; align-items: center;'};
  position: relative;
  overflow: hidden;
`;

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  padding,
  background,
  fullHeight = false
}) => {
  return (
    <StyledSection
      id={id}
      className={className}
      $padding={padding}
      $background={background}
      $fullHeight={fullHeight}
    >
      {children}
    </StyledSection>
  );
};

export default Section;

