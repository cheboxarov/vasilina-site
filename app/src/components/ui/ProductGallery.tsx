import React, { useState } from 'react';
import styled from 'styled-components';
import LazyImage from '../LazyImage';
import { ProductImage } from '../../types';

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ThumbnailsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Thumbnail = styled.button<{ active: boolean }>`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid ${props => props.active ? '#D2691E' : 'rgba(255, 255, 255, 0.2)'};
  overflow: hidden;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.active ? 1 : 0.7};

  &:hover {
    opacity: 1;
    border-color: #D2691E;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <GalleryContainer>
        <MainImage>
          <LazyImage
            src="/images/placeholder.jpg"
            alt={`${productName} - изображение отсутствует`}
            fallbackText="Нет фото"
          />
        </MainImage>
      </GalleryContainer>
    );
  }

  const activeImage = images[activeImageIndex] || images[0];

  return (
    <GalleryContainer>
      <MainImage>
        <LazyImage
          src={activeImage.url}
          alt={activeImage.alt}
          fallbackText={productName}
        />
      </MainImage>

      {images.length > 1 && (
        <>
          <ThumbnailsContainer>
            {images.map((image, index) => (
              <Thumbnail
                key={image.id}
                active={index === activeImageIndex}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image.url}
                  alt={`${productName} - миниатюра ${index + 1}`}
                  loading="lazy"
                />
              </Thumbnail>
            ))}
          </ThumbnailsContainer>

          <ImageCounter>
            {activeImageIndex + 1} / {images.length}
          </ImageCounter>
        </>
      )}
    </GalleryContainer>
  );
};

export default ProductGallery;

