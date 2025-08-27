import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #111;
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterText = styled.p`
  color: #888;
  font-size: 14px;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterText>&copy; 2024 Мастерская Василины. Все права защищены.</FooterText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
