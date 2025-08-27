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
  IconType
} from 'react-icons/hi';

type IconComponent = IconType;


const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #f5f5f5;
  font-size: 36px;
  font-weight: 700;
`;

const ControlsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;



const categories: Array<{
  id: string;
  name: string;
  icon: IconComponent;
}> = [
  { id: 'all', name: 'Все изделия', icon: HiOutlineViewGrid },
  { id: 'wallets', name: 'Кошельки', icon: HiOutlineCreditCard },
  { id: 'belts', name: 'Ремни', icon: HiOutlineTicket },
  { id: 'bags', name: 'Сумки', icon: HiOutlineBriefcase },
  { id: 'accessories', name: 'Аксессуары', icon: HiOutlineSparkles }
];



const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  const filteredProducts: Product[] = productsData
    .filter(p => filter === 'all' || p.category === filter)
    .sort((a, b) => sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name));

  const handleClearFilters = () => {
    setFilter('all');
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

        <FilterPanel
          filters={filterItems}
          activeFilter={filter}
          onFilterChange={setFilter}
          onClearFilters={handleClearFilters}
        />

        <ControlsRow>
          <SortDropdown value={sortBy} onChange={setSortBy} size="small" />
        </ControlsRow>
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


