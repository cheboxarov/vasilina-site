import React from 'react';
import styled from 'styled-components';
import { HiOutlineShoppingBag, HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #888;
  font-size: 12px;
`;

const StatIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

const StockStatus = styled.div<{ inStock: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${props => props.inStock ? '#4CAF50' : '#F44336'};
  font-size: 12px;
  font-weight: 500;
`;

const StockIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
`;

export interface ProductStatsProps {
  orderCount: number;
  inStock: boolean;
  stockCount?: number;
}

const ProductStats: React.FC<ProductStatsProps> = ({
  orderCount,
  inStock,
  stockCount
}) => {
  return (
    <StatsContainer>
      <StatItem>
        <StatIcon>
          <HiOutlineShoppingBag />
        </StatIcon>
        {orderCount} заказов
      </StatItem>

      <StockStatus inStock={inStock}>
        <StockIcon>
          {inStock ? <HiOutlineCheckCircle /> : <HiOutlineXCircle />}
        </StockIcon>
        {inStock
          ? (stockCount ? `${stockCount} в наличии` : 'В наличии')
          : 'Нет в наличии'
        }
      </StockStatus>
    </StatsContainer>
  );
};

export default ProductStats;

