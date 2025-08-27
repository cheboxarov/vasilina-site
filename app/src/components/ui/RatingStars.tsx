import React from 'react';
import styled from 'styled-components';
import { HiOutlineStar } from 'react-icons/hi';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarIcon = styled(HiOutlineStar)<{ filled: boolean }>`
  width: 14px;
  height: 14px;
  color: ${props => props.filled ? '#D2691E' : '#555'};
  transition: color 0.2s ease;
`;

const RatingText = styled.span`
  color: #ccc;
  font-size: 12px;
  margin-left: 4px;
`;

const ReviewCount = styled.span`
  color: #888;
  font-size: 12px;
  margin-left: 8px;
`;

export interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewCount,
  showText = true,
  size = 'medium'
}) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starSize = {
    small: 12,
    medium: 14,
    large: 16
  };

  return (
    <RatingContainer>
      {Array.from({ length: maxStars }, (_, index) => {
        let filled = false;
        if (index < filledStars) {
          filled = true;
        } else if (index === filledStars && hasHalfStar) {
          filled = true; // Для простоты показываем полную звезду вместо половинчатой
        }

        return (
          <StarIcon
            key={index}
            filled={filled}
            style={{
              width: `${starSize[size]}px`,
              height: `${starSize[size]}px`
            }}
          />
        );
      })}

      {showText && (
        <>
          <RatingText>{rating.toFixed(1)}</RatingText>
          {reviewCount && (
            <ReviewCount>({reviewCount})</ReviewCount>
          )}
        </>
      )}
    </RatingContainer>
  );
};

export default RatingStars;

