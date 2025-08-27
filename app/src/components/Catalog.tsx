import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ScrollReveal from './ScrollReveal';
import { Product } from '../types';
import { products as productsData } from '../data/products';

const CatalogSection = styled.section`
  padding: 100px 0;
  background-color: #1a1a1a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #f5f5f5;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProductItem = styled.li`
  background: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #333;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: #D2691E;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const CategoryFilters = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #D2691E, #8B4513)' : '#2a2a2a'};
  color: ${props => props.active ? 'white' : '#ccc'};
  border: 1px solid ${props => props.active ? '#D2691E' : '#444'};
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #D2691E, #8B4513)' : '#333'};
    color: ${props => props.active ? 'white' : '#f5f5f5'};
    transform: translateY(-2px);
  }
`;

const SortSelect = styled.select`
  background: #2a2a2a;
  color: #f5f5f5;
  border: 1px solid #444;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #D2691E;
  }
`;
const Catalog: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products: Product[] = productsData;

  const categories = [
    { id: 'all', name: 'Все изделия' },
    { id: 'wallets', name: 'Кошельки' },
    { id: 'belts', name: 'Ремни' },
    { id: 'bags', name: 'Сумки' },
    { id: 'accessories', name: 'Аксессуары' }
  ];

  const filteredProducts = products.filter(product =>
    filter === 'all' || product.category === filter
  ).sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <CatalogSection id="catalog">
      <Container>
        <ScrollReveal>
          <Title>Наши изделия</Title>
        </ScrollReveal>

        <FiltersContainer>
          <CategoryFilters>
            {categories.map(category => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FilterButton
                  active={filter === category.id}
                  onClick={() => setFilter(category.id)}
                >
                  {category.name}
                </FilterButton>
              </motion.div>
            ))}
          </CategoryFilters>

          <SortSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">По названию</option>
            <option value="price">По цене</option>
          </SortSelect>
        </FiltersContainer>

        <motion.div layout transition={{ duration: 0.3 }}>
          <ProductList>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductItem>
                  <ProductCard product={product} />
                </ProductItem>
              </motion.div>
            ))}
          </ProductList>
        </motion.div>
      </Container>
    </CatalogSection>
  );
};

export default Catalog;
