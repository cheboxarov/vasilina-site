import React from 'react';
import styled from 'styled-components';
import { ProductParameter } from '../../types';

const ParametersContainer = styled.div`
  margin-top: 24px;
`;

const ParametersTitle = styled.h4`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ParametersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const ParameterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const ParameterName = styled.span`
  color: #ccc;
  font-size: 14px;
  font-weight: 500;
`;

const ParameterValue = styled.span`
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
`;

export interface ProductParametersProps {
  parameters: ProductParameter[];
  title?: string;
}

const ProductParameters: React.FC<ProductParametersProps> = ({
  parameters,
  title = "Характеристики"
}) => {
  if (!parameters || parameters.length === 0) {
    return null;
  }

  return (
    <ParametersContainer>
      <ParametersTitle>{title}</ParametersTitle>
      <ParametersGrid>
        {parameters.map((parameter) => (
          <ParameterItem key={parameter.id}>
            <ParameterName>{parameter.name}</ParameterName>
            <ParameterValue>{parameter.value}</ParameterValue>
          </ParameterItem>
        ))}
      </ParametersGrid>
    </ParametersContainer>
  );
};

export default ProductParameters;

