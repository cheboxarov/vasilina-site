import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Product } from '../types';
import LazyImage from './LazyImage';
import { RatingStars, ProductStats } from './ui';
import { Link } from 'react-router-dom';


const ProductImage = styled.figure`
  height: 250px;
  background: linear-gradient(135deg, #3a3a3a, #2a2a2a);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0;
`;



const ProductTitle = styled.h3`
  padding: 20px;
  font-size: 20px;
  color: #f5f5f5;
  margin: 0;
`;

const ProductDescription = styled.p`
  padding: 0 20px;
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const ProductInfo = styled.div`
  padding: 0 20px 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #D2691E;
`;

const OriginalPrice = styled.div`
  font-size: 16px;
  color: #888;
  text-decoration: line-through;
`;

const DiscountBadge = styled.div`
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
`;

const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const Tag = styled.span`
  background: rgba(210, 105, 30, 0.1);
  color: #D2691E;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.article
      itemScope
      itemType="https://schema.org/Product"
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <meta itemProp="name" content={product.name} />
      <meta itemProp="description" content={product.description} />
      <meta itemProp="image" content={`/images/${product.image.toLowerCase()}.jpg`} />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content={product.price.toString()} />
        <meta itemProp="priceCurrency" content="RUB" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
      </div>

      <motion.div
        whileHover={{
          boxShadow: "0 20px 40px rgba(210, 105, 30, 0.2)",
          borderColor: "#D2691E"
        }}
        transition={{ duration: 0.3 }}
      >
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <ProductImage>
            <LazyImage
              src={`/images/${product.image.toLowerCase()}.jpg`}
              alt={`${product.name} - ${product.description}`}
              fallbackText={product.image}
            />
          </ProductImage>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProductTitle>{product.name}</ProductTitle>
          </Link>
          <ProductDescription>{product.shortDescription || product.description}</ProductDescription>

          <ProductInfo>
            <RatingStars
              rating={product.rating}
              reviewCount={product.reviewCount}
              size="small"
            />

            <ProductStats
              orderCount={product.orderCount}
              inStock={product.inStock}
              stockCount={product.stockCount}
            />

            <PriceContainer>
              <Price>₽ {product.price.toLocaleString()}</Price>
              {product.originalPrice && product.originalPrice > product.price && (
                <OriginalPrice>₽ {product.originalPrice.toLocaleString()}</OriginalPrice>
              )}
              {product.originalPrice && product.originalPrice > product.price && (
                <DiscountBadge>
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </DiscountBadge>
              )}
            </PriceContainer>

            {product.tags && product.tags.length > 0 && (
              <ProductTags>
                {product.tags.slice(0, 3).map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </ProductTags>
            )}
          </ProductInfo>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default ProductCard;
