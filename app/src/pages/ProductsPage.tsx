import React, { useState } from 'react';
import styled from 'styled-components';
import { products as productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SortDropdown, FilterPanel, FilterItem, Section, Container } from '../components/ui';
import { Product } from '../types';
import {
  HiOutlineViewGrid,
  HiOutlineCreditCard,
  HiOutlineTicket,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineSearch,
  HiOutlineX
} from 'react-icons/hi';

type IconComponent = React.ComponentType<{ size?: number | string; color?: string }>;


const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #f5f5f5;
  font-size: 36px;
  font-weight: 700;
`;

const FiltersBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  margin-bottom: 24px;
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
`;

const LeftFilters = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 280px;
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 8px 14px;
  transition: all 0.2s ease;
  min-width: 280px;
  flex: 1 1 auto;

  &:focus-within {
    border-color: #D2691E;
    background: rgba(210, 105, 30, 0.05);
  }
`;

const ClearSearchButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  &:hover {
    color: #D2691E;
    background: rgba(210, 105, 30, 0.1);
  }

  &:focus {
    outline: none;
    color: #D2691E;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 420px));
  gap: 30px;
  justify-content: center;
`;



const categories: Array<{
  id: string;
  name: string;
  icon: any;
}> = [
  { id: 'all', name: 'Все изделия', icon: HiOutlineViewGrid },
  { id: 'wallets', name: 'Кошельки', icon: HiOutlineCreditCard },
  { id: 'belts', name: 'Ремни', icon: HiOutlineTicket },
  { id: 'bags', name: 'Сумки', icon: HiOutlineBriefcase },
  { id: 'accessories', name: 'Аксессуары', icon: HiOutlineSparkles }
];



const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc' | 'rating' | 'orders'>('orders');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts: Product[] = productsData
    .filter(p => {
      const matchesFilter = filter === 'all' || p.category === filter;
      const matchesSearch = searchTerm === '' ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'orders':
          return b.orderCount - a.orderCount;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleClearFilters = () => {
    setFilter('all');
    setSearchTerm('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterItems: FilterItem[] = categories.map(cat => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon
  }));

  return (
    <Section>
      <Container>
        <Title>Каталог изделий</Title>

        <FiltersBar>
          <LeftFilters>
            <FilterPanel
              filters={filterItems}
              activeFilter={filter}
              onFilterChange={setFilter}
              onClearFilters={handleClearFilters}
            />
            <SearchContainer>
              <SearchIcon>
                {React.createElement(HiOutlineSearch as any)}
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Поиск по названию..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && (
                <ClearSearchButton
                  onClick={() => setSearchTerm('')}
                  type="button"
                  aria-label="Очистить поиск"
                >
                  {React.createElement(HiOutlineX as any)}
                </ClearSearchButton>
              )}
            </SearchContainer>
          </LeftFilters>
          <RightControls>
            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
              size="small"
            />
          </RightControls>
        </FiltersBar>
        <Grid>
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ProductsPage;


