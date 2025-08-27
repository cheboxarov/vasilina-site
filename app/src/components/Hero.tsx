import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineViewGrid } from 'react-icons/hi';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text fill="%23D2691E" font-size="8" opacity="0.03">LEATHER</text></svg>');
    opacity: 0.3;
  }
`;

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: #f5f5f5;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin-bottom: 40px;
    color: #ccc;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  padding: 18px 40px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: transparent;
    border-color: #D2691E;
    color: #D2691E;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 35px rgba(210, 105, 30, 0.3);

    svg {
      transform: translateX(3px);
    }

    &::before {
      left: 100%;
    }
  }
`;

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroSection id="home">
      <ParallaxContainer ref={parallaxRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroContent>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Искусство в каждой детали
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Уникальные кожаные изделия, созданные с любовью и вниманием к деталям
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CTAButton to="/products">
                  <HiOutlineViewGrid />
                  Посмотреть каталог
                </CTAButton>
              </motion.div>
            </HeroContent>
          </motion.div>
        </Container>
      </ParallaxContainer>
    </HeroSection>
  );
};

export default Hero;
