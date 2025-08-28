import React from 'react';
import styled from 'styled-components';

const StyledFilterButton = styled.button<{ $active: boolean; $size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$size === 'small' ? '6px' : props.$size === 'large' ? '12px' : '8px'};
  background: ${props => props.$active ? 'linear-gradient(135deg, #D2691E, #8B4513)' : '#2a2a2a'};
  color: ${props => props.$active ? 'white' : '#ccc'};
  border: 1px solid ${props => props.$active ? '#D2691E' : '#444'};
  padding: ${props => props.$size === 'small' ? '8px 16px' : props.$size === 'large' ? '16px 28px' : '12px 20px'};
  border-radius: ${props => props.$size === 'small' ? '18px' : props.$size === 'large' ? '30px' : '25px'};
  font-size: ${props => props.$size === 'small' ? '12px' : props.$size === 'large' ? '16px' : '14px'};
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    width: ${props => props.$size === 'small' ? '14px' : props.$size === 'large' ? '20px' : '16px'};
    height: ${props => props.$size === 'small' ? '14px' : props.$size === 'large' ? '20px' : '16px'};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(210, 105, 30, 0.2);
    color: ${props => props.$active ? 'white' : '#f5f5f5'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(210, 105, 30, 0.2);
  }
`;

export interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  children,
  size = 'medium',
  className
}) => {
  return (
    <StyledFilterButton
      $active={active}
      onClick={onClick}
      $size={size}
      className={className}
    >
      {children}
    </StyledFilterButton>
  );
};

export default FilterButton;

