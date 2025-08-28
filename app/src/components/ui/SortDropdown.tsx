import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlineSelector, HiOutlineChevronDown } from 'react-icons/hi';

const SortDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SortDropdownButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  background: #2a2a2a;
  color: #f5f5f5;
  border: 1px solid #444;
  padding: 8px 12px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(210, 105, 30, 0.1) 0%, transparent 100%);
    border-radius: 19px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    transition: transform 0.3s ease;
    transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
    width: 12px;
    height: 12px;
  }

  &:hover {
    border-color: #D2691E;
    color: #f5f5f5;

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
    border-color: #D2691E;
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.15);
  }
`;

const SortDropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1000;
  min-width: 120px;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-6px'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const SortDropdownItem = styled.button<{ $active: boolean }>`
  display: block;
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  color: ${props => props.$active ? '#D2691E' : '#f5f5f5'};
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(210, 105, 30, 0.1);
    color: #D2691E;
  }

  &:focus {
    outline: none;
    background: rgba(210, 105, 30, 0.1);
  }
`;

const SortIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: rgba(210, 105, 30, 0.1);
  border-radius: 6px;
  color: #D2691E;
`;



export interface SortDropdownProps {
  value: 'name' | 'price-asc' | 'price-desc' | 'rating' | 'orders';
  onChange: (value: 'name' | 'price-asc' | 'price-desc' | 'rating' | 'orders') => void;
  size?: 'small' | 'medium' | 'large';
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange, size = 'small' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (newValue: 'name' | 'price-asc' | 'price-desc' | 'rating' | 'orders') => {
    onChange(newValue);
    setIsOpen(false);
  };

  const getDisplayText = (val: 'name' | 'price-asc' | 'price-desc' | 'rating' | 'orders') => {
    switch (val) {
      case 'name': return 'По названию';
      case 'price-asc': return 'Сначала дешевые';
      case 'price-desc': return 'Сначала дорогие';
      case 'rating': return 'Топ по рейтингу';
      case 'orders': return 'Топ по заказам';
      default: return 'Топ по заказам';
    }
  };

  const sortOptions = [
    { value: 'orders' as const, label: 'Топ по заказам' },
    { value: 'rating' as const, label: 'Топ по рейтингу' },
    { value: 'price-asc' as const, label: 'Сначала дешевые' },
    { value: 'price-desc' as const, label: 'Сначала дорогие' },
    { value: 'name' as const, label: 'По названию' }
  ];

  return (
    <SortDropdownContainer ref={dropdownRef}>
      <SortDropdownButton
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <SortIcon>
          {React.createElement(HiOutlineSelector as any)}
        </SortIcon>
        <span>{getDisplayText(value)}</span>
        {React.createElement(HiOutlineChevronDown as any)}
      </SortDropdownButton>

      <SortDropdownMenu $isOpen={isOpen}>
        {sortOptions.map(option => (
          <SortDropdownItem
            key={option.value}
            $active={value === option.value}
            onClick={() => handleSelect(option.value)}
            type="button"
          >
            {option.label}
          </SortDropdownItem>
        ))}
      </SortDropdownMenu>
    </SortDropdownContainer>
  );
};

export default SortDropdown;
