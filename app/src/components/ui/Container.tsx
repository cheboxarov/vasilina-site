import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  max-width: ${props => {
    switch (props.size) {
      case 'small': return '800px';
      case 'large': return '1400px';
      default: return '1200px';
    }
  }};
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export interface ContainerProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ size = 'medium', children, className }) => {
  return (
    <StyledContainer size={size} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;

