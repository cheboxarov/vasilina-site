import React from 'react';
import styled from 'styled-components';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const QuantityLabel = styled.span`
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 500;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  background: rgba(210, 105, 30, 0.1);
  border: 1px solid rgba(210, 105, 30, 0.3);
  color: #D2691E;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: rgba(210, 105, 30, 0.2);
    border-color: #D2691E;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  width: 60px;
  height: 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #f5f5f5;
  text-align: center;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #D2691E;
    box-shadow: 0 0 0 2px rgba(210, 105, 30, 0.2);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const StockInfo = styled.div`
  color: #888;
  font-size: 12px;
`;

export interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  maxQuantity?: number;
  stockCount?: number;
  label?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  maxQuantity,
  stockCount,
  label = "Количество:"
}) => {
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    if (!maxQuantity || newQuantity <= maxQuantity) {
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1);
    onQuantityChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      if (!maxQuantity || value <= maxQuantity) {
        onQuantityChange(value);
      } else {
        onQuantityChange(maxQuantity);
      }
    }
  };

  const effectiveMaxQuantity = maxQuantity || stockCount || 99;

  return (
    <QuantityContainer>
      <QuantityLabel>{label}</QuantityLabel>
      <QuantityControls>
        <QuantityButton
          onClick={handleDecrement}
          disabled={quantity <= 1}
        >
          <HiOutlineMinus />
        </QuantityButton>

        <QuantityInput
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={1}
          max={effectiveMaxQuantity}
        />

        <QuantityButton
          onClick={handleIncrement}
          disabled={quantity >= effectiveMaxQuantity}
        >
          <HiOutlinePlus />
        </QuantityButton>
      </QuantityControls>

      {stockCount && (
        <StockInfo>
          (доступно: {stockCount} шт.)
        </StockInfo>
      )}
    </QuantityContainer>
  );
};

export default QuantitySelector;

