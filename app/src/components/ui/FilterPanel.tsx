import React from 'react';
import styled from 'styled-components';

export type FilterItem = {
  id: string;
  name: string;
  icon?: React.ComponentType<any>;
};

export interface FilterPanelProps {
  filters: FilterItem[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  onClearFilters?: () => void;
}

const Panel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Chip = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${props => (props.$active ? 'rgba(210,105,30,0.35)' : '#444')};
  color: ${props => (props.$active ? '#fff' : '#f5f5f5')};
  background: ${props => (props.$active ? 'linear-gradient(135deg, #D2691E, #8B4513)' : 'rgba(255,255,255,0.05)')};
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #D2691E;
    transform: translateY(-1px);
  }
`;

const ClearButton = styled.button`
  margin-left: 6px;
  background: none;
  border: none;
  color: #888;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #f5f5f5;
  }
`;

const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  onClearFilters
}) => {
  return (
    <Panel>
      {filters.map(item => (
        <Chip
          key={item.id}
          type="button"
          $active={activeFilter === item.id}
          onClick={() => onFilterChange(item.id)}
        >
          {item.icon && (
            <IconBox>{React.createElement(item.icon)}</IconBox>
          )}
          <span>{item.name}</span>
        </Chip>
      ))}

      {onClearFilters && (
        <ClearButton type="button" onClick={onClearFilters}>
          Сбросить
        </ClearButton>
      )}
    </Panel>
  );
};

export default FilterPanel;


