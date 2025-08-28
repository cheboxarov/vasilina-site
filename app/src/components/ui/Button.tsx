import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface ButtonAsButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
}

interface ButtonAsLinkProps extends BaseButtonProps {
  as: 'link';
  to: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const StyledButton = styled.button<{
  $variant: 'primary' | 'secondary';
  $size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$size === 'small' ? '6px' : props.$size === 'large' ? '12px' : '8px'};
  background: ${props => props.$variant === 'primary'
    ? 'linear-gradient(135deg, #D2691E, #8B4513)'
    : '#2a2a2a'};
  color: ${props => props.$variant === 'primary' ? 'white' : '#f5f5f5'};
  border: ${props => props.$variant === 'primary' ? 'none' : '1px solid #444'};
  border-radius: ${props => props.$size === 'small' ? '18px' : props.$size === 'large' ? '30px' : '25px'};
  padding: ${props => props.$size === 'small' ? '10px 18px' : props.$size === 'large' ? '18px 32px' : '14px 24px'};
  font-size: ${props => props.$size === 'small' ? '14px' : props.$size === 'large' ? '18px' : '16px'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '22px' : '18px'};
    height: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '22px' : '18px'};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$variant === 'primary'
      ? '0 10px 25px rgba(210, 105, 30, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.2)'};
    ${props => props.$variant === 'secondary' && `
      border-color: #D2691E;
      color: #D2691E;
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const StyledLink = styled(Link)<{
  $variant: 'primary' | 'secondary';
  $size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$size === 'small' ? '6px' : props.$size === 'large' ? '12px' : '8px'};
  background: ${props => props.$variant === 'primary'
    ? 'linear-gradient(135deg, #D2691E, #8B4513)'
    : '#2a2a2a'};
  color: ${props => props.$variant === 'primary' ? 'white' : '#f5f5f5'};
  border: ${props => props.$variant === 'primary' ? 'none' : '1px solid #444'};
  border-radius: ${props => props.$size === 'small' ? '18px' : props.$size === 'large' ? '30px' : '25px'};
  padding: ${props => props.$size === 'small' ? '10px 18px' : props.$size === 'large' ? '18px 32px' : '14px 24px'};
  font-size: ${props => props.$size === 'small' ? '14px' : props.$size === 'large' ? '18px' : '16px'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '22px' : '18px'};
    height: ${props => props.$size === 'small' ? '16px' : props.$size === 'large' ? '22px' : '18px'};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$variant === 'primary'
      ? '0 10px 25px rgba(210, 105, 30, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.2)'};
    ${props => props.$variant === 'secondary' && `
      border-color: #D2691E;
      color: #D2691E;
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.2);
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  if (props.as === 'link') {
    const { to, as, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <StyledLink
        to={to}
        $variant={variant}
        $size={size}
        className={className}
        {...linkProps}
      >
        {children}
      </StyledLink>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      className={className}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
