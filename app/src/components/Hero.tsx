import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineSparkles, HiOutlineHand, HiOutlineShieldCheck, HiOutlineTruck, HiOutlineCreditCard, HiOutlineReply } from 'react-icons/hi';

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
    background: radial-gradient(circle at 20% 30%, rgba(210, 105, 30, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.05) 0%, transparent 40%);
    opacity: 1;
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
    font-size: clamp(40px, 6vw, 72px);
    margin-bottom: 20px;
    color: #f5f5f5;
    font-weight: bold;
  }

  p {
    font-size: clamp(16px, 2.2vw, 20px);
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

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #f5f5f5;
  padding: 18px 32px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 1px solid #444;

  &:hover {
    border-color: #D2691E;
    color: #D2691E;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 35px rgba(210, 105, 30, 0.25);
  }
`;

const BadgesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f5f5f5;
  font-size: 12px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
`;

const BadgeIcon = styled.span`
  display: inline-flex;
  color: #D2691E;
  font-size: 14px;
`;

const CTARow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const TrustBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-top: 18px;
  color: #bbb;
  font-size: 14px;
  opacity: 0.9;
  flex-wrap: wrap;
`;

const TrustItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const TrustIcon = styled.span`
  display: inline-flex;
  color: #D2691E;
  font-size: 16px;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.25;
  pointer-events: none;
`;

const OrbOne = styled(Orb)`
  width: 280px;
  height: 280px;
  background: #D2691E;
  top: 10%;
  left: -80px;
`;

const OrbTwo = styled(Orb)`
  width: 340px;
  height: 340px;
  background: #8B4513;
  bottom: 5%;
  right: -100px;
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
              <BadgesRow>
                <Badge>
                  <BadgeIcon>{React.createElement(HiOutlineSparkles)}</BadgeIcon>
                  Премиум кожа
                </Badge>
                <Badge>
                  <BadgeIcon>{React.createElement(HiOutlineHand)}</BadgeIcon>
                  Ручная работа
                </Badge>
                <Badge>
                  <BadgeIcon>{React.createElement(HiOutlineShieldCheck)}</BadgeIcon>
                  Гарантия качества
                </Badge>
              </BadgesRow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Мастерская <span style={{ color: '#D2691E' }}>Василины</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Искусство в каждой детали • Ручная работа • Натуральная кожа высшего качества
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CTARow>
                  <CTAButton to="/products">
                    <HiOutlineViewGrid />
                    Посмотреть каталог
                  </CTAButton>
                  <SecondaryButton to="/about">Узнать о мастерской</SecondaryButton>
                </CTARow>
              </motion.div>
              <TrustBar>
                <TrustItem>
                  <TrustIcon>{React.createElement(HiOutlineTruck)}</TrustIcon>
                  Доставка по РФ
                </TrustItem>
                <TrustItem>
                  <TrustIcon>{React.createElement(HiOutlineCreditCard)}</TrustIcon>
                  Удобная оплата
                </TrustItem>
                <TrustItem>
                  <TrustIcon>{React.createElement(HiOutlineReply)}</TrustIcon>
                  14 дней возврат
                </TrustItem>
              </TrustBar>
            </HeroContent>
          </motion.div>
        </Container>
        <OrbOne />
        <OrbTwo />
      </ParallaxContainer>
    </HeroSection>
  );
};

export default Hero;
