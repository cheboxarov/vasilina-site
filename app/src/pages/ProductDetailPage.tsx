import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import {
  RatingStars,
  ProductStats,
  ProductGallery,
  ProductParameters,
  QuantitySelector,
  Button,
  Container,
  Section
} from '../components/ui';
import { HiOutlineShoppingBag, HiOutlineArrowLeft, HiOutlineChat, HiOutlineHeart } from 'react-icons/hi';

const PageHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Breadcrumb = styled.nav`
  margin-bottom: 16px;
`;

const BreadcrumbLink = styled(Link)`
  color: #888;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #D2691E;
  }

  &:not(:last-child)::after {
    content: ' / ';
    margin: 0 8px;
    color: #555;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const QuantitySection = styled.div`
  margin-bottom: 32px;
  padding: 20px;
  background: rgba(42, 42, 42, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const ProductImageSection = styled.div``;

const ProductInfoSection = styled.div``;

const ProductHeader = styled.div`
  margin-bottom: 24px;
`;

const ProductTitle = styled.h1`
  color: #f5f5f5;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
  }
`;

const ProductSubtitle = styled.p`
  color: #ccc;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const PriceSection = styled.div`
  margin-bottom: 32px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

const CurrentPrice = styled.div`
  color: #D2691E;
  font-size: 32px;
  font-weight: 700;
`;

const OriginalPrice = styled.div`
  color: #888;
  font-size: 24px;
  text-decoration: line-through;
`;

const DiscountBadge = styled.div`
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const TagsSection = styled.div`
  margin-bottom: 32px;
`;

const TagsTitle = styled.h4`
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: rgba(210, 105, 30, 0.1);
  color: #D2691E;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ReviewsSection = styled.div`
  margin-top: 60px;
`;

const ReviewsTitle = styled.h3`
  color: #f5f5f5;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ReviewsList = styled.div`
  display: grid;
  gap: 20px;
`;

const ReviewItem = styled.div`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ReviewAuthor = styled.div`
  font-weight: 600;
  color: #f5f5f5;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ReviewDate = styled.div`
  color: #888;
  font-size: 12px;
`;

const ReviewVerified = styled.span`
  color: #4CAF50;
  font-size: 12px;
  font-weight: 500;
`;

const ReviewText = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin: 0;
`;

const NoReviews = styled.div`
  text-align: center;
  color: #888;
  padding: 40px;
  background: rgba(42, 42, 42, 0.5);
  border-radius: 16px;
`;

const InfoSectionTitle = styled.h3`
  color: #f5f5f5;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InfoCard = styled.div`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <Section>
        <Container>
          <PageHeader>
            <h1 style={{ color: '#f5f5f5', marginBottom: '16px' }}>Товар не найден</h1>
            <p style={{ color: '#ccc', marginBottom: '24px' }}>Похоже, такого товара нет в нашем каталоге.</p>
            <Button as="link" to="/products">
              <HiOutlineArrowLeft />
              Вернуться в каталог
            </Button>
          </PageHeader>
        </Container>
      </Section>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    // Имитация добавления в корзину
    alert(`Товар "${product.name}" добавлен в корзину (${quantity} шт.)`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Section>
      <Container>
        <PageHeader>
          <Breadcrumb>
            <BreadcrumbLink to="/">Главная</BreadcrumbLink>
            <BreadcrumbLink to="/products">Каталог</BreadcrumbLink>
            <span style={{ color: '#f5f5f5' }}>{product.name}</span>
          </Breadcrumb>
        </PageHeader>

        <ProductGrid>
          <ProductImageSection>
            <ProductGallery
              images={product.images || []}
              productName={product.name}
            />
          </ProductImageSection>

          <ProductInfoSection>
            <ProductHeader>
              <ProductTitle>{product.name}</ProductTitle>
              {product.shortDescription && (
                <ProductSubtitle>{product.shortDescription}</ProductSubtitle>
              )}
            </ProductHeader>

            <ProductMeta>
              <RatingStars
                rating={product.rating}
                reviewCount={product.reviewCount}
                size="medium"
              />

              <ProductStats
                orderCount={product.orderCount}
                inStock={product.inStock}
                stockCount={product.stockCount}
              />
            </ProductMeta>

            <PriceSection>
              <PriceContainer>
                <CurrentPrice>₽ {product.price.toLocaleString()}</CurrentPrice>
                {product.originalPrice && product.originalPrice > product.price && (
                  <OriginalPrice>₽ {product.originalPrice.toLocaleString()}</OriginalPrice>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <DiscountBadge>
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </DiscountBadge>
                )}
              </PriceContainer>
            </PriceSection>

            {product.tags && product.tags.length > 0 && (
              <TagsSection>
                <TagsTitle>Категории:</TagsTitle>
                <TagsContainer>
                  {product.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </TagsSection>
            )}

            {product.inStock && (
              <QuantitySection>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  maxQuantity={product.stockCount}
                  stockCount={product.stockCount}
                />
              </QuantitySection>
            )}

            <ActionButtons>
              <Button variant="primary" onClick={handleAddToCart}>
                <HiOutlineShoppingBag />
                Оформить заказ
              </Button>

              <Button variant="secondary" onClick={toggleFavorite}>
                <HiOutlineHeart />
                {isFavorite ? 'В избранном' : 'В избранное'}
              </Button>

              <Button as="link" to="/products" variant="secondary">
                <HiOutlineArrowLeft />
                Назад к каталогу
              </Button>
            </ActionButtons>
          </ProductInfoSection>
        </ProductGrid>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '60px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '30px'
          }
        } as any}>
          <div>
            <ProductParameters
              parameters={product.parameters || []}
              title="Характеристики"
            />
          </div>

          <div>
            <h3 style={{
              color: '#f5f5f5',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '24px',
              '@media (max-width: 768px)': {
                fontSize: '20px'
              }
            } as any}>
              Описание
            </h3>
            <div style={{
              background: 'rgba(42, 42, 42, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              lineHeight: '1.8',
              color: '#ccc'
            }}>
              {product.description}
            </div>
          </div>
        </div>

        <ReviewsSection>
          <ReviewsTitle>Отзывы покупателей ({product.reviewCount})</ReviewsTitle>
          {product.reviews && product.reviews.length > 0 ? (
            <ReviewsList>
              {product.reviews.map((review) => (
                <ReviewItem key={review.id}>
                  <ReviewHeader>
                    <ReviewAuthor>{review.author}</ReviewAuthor>
                    <ReviewRating>
                      <RatingStars rating={review.rating} size="small" showText={false} />
                      <ReviewDate>{new Date(review.date).toLocaleDateString('ru-RU')}</ReviewDate>
                    </ReviewRating>
                  </ReviewHeader>
                  {review.verified && (
                    <ReviewVerified>✓ Проверенный покупатель</ReviewVerified>
                  )}
                  <ReviewText>{review.comment}</ReviewText>
                </ReviewItem>
              ))}
            </ReviewsList>
          ) : (
            <NoReviews>
              <HiOutlineChat size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p>Отзывов пока нет. Будьте первым!</p>
            </NoReviews>
          )}
        </ReviewsSection>

        {/* Секция дополнительной информации */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '60px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '20px'
          }
        } as any}>
          <div>
            <InfoSectionTitle>🚚 Доставка</InfoSectionTitle>
            <InfoCard>
              <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong style={{ color: '#f5f5f5' }}>По Москве:</strong> от 300₽ (курьер)
              </p>
              <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong style={{ color: '#f5f5f5' }}>По России:</strong> от 500₽ (СДЭК, Почта России)
              </p>
              <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong style={{ color: '#f5f5f5' }}>Самовывоз:</strong> бесплатно из мастерской
              </p>
              <p style={{ color: '#888', fontSize: '14px' }}>
                Срок доставки: 1-7 рабочих дней
              </p>
            </InfoCard>
          </div>

          <div>
            <InfoSectionTitle>↩️ Возврат</InfoSectionTitle>
            <InfoCard>
              <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.6' }}>
                Возврат товара возможен в течение <strong style={{ color: '#f5f5f5' }}>14 дней</strong> с момента получения.
              </p>
              <p style={{ color: '#ccc', marginBottom: '12px', lineHeight: '1.6' }}>
                Товар должен быть в <strong style={{ color: '#f5f5f5' }}>оригинальной упаковке</strong> и без признаков использования.
              </p>
              <p style={{ color: '#888', fontSize: '14px' }}>
                Для возврата свяжитесь с нами по телефону или email
              </p>
            </InfoCard>
          </div>

          <div>
            <InfoSectionTitle>💳 Оплата</InfoSectionTitle>
            <InfoCard>
              <p style={{ color: '#ccc', marginBottom: '8px' }}>💵 Наличными при получении</p>
              <p style={{ color: '#ccc', marginBottom: '8px' }}>💳 Банковской картой</p>
              <p style={{ color: '#ccc', marginBottom: '8px' }}>🏦 Переводом на карту</p>
              <p style={{ color: '#ccc', marginBottom: '12px' }}>📱 Оплата через СБП</p>
              <p style={{ color: '#888', fontSize: '14px' }}>
                Все платежи защищены и безопасны
              </p>
            </InfoCard>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductDetailPage;


