import React from 'react';
import styled from 'styled-components';
import About from '../components/About';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
};

export default AboutPage;
