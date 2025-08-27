import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid #333;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled(Link)`
  h1 {
    font-size: 28px;
    color: #D2691E;
    font-weight: bold;
    margin: 0;
    transition: color 0.3s ease;
    text-decoration: none;
    border-bottom: none;
  }

  p {
    font-size: 12px;
    color: #888;
    margin: 2px 0 0 0;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  &:hover {
    h1 {
      color: #f5f5f5;
    }
    p {
      color: #ccc;
    }
    text-decoration: none;
  }

  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${props => props.active ? '#D2691E' : '#f5f5f5'};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  border-bottom: none;

  &:hover {
    color: #D2691E;
    background: rgba(210, 105, 30, 0.1);
    text-decoration: none;
    border-bottom: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: 0;
    left: 15px;
    background-color: #D2691E;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 30px);
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    border-bottom: 1px solid #333;

    &:last-child {
      border-bottom: none;
    }
  }
`;



const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo to="/">
          <h1>Мастерская Василины</h1>
          <p>Искусство в каждой детали</p>
        </Logo>

        <Nav>
          <NavLink
            to="/"
            active={isActive('/')}
          >
            Главная
          </NavLink>
          <NavLink
            to="/products"
            active={isActive('/products')}
          >
            Каталог
          </NavLink>
          <NavLink
            to="/about"
            active={isActive('/about')}
          >
            О нас
          </NavLink>
          <NavLink
            to="/contacts"
            active={isActive('/contacts')}
          >
            Контакты
          </NavLink>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
