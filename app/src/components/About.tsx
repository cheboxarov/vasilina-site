import React from 'react';
import styled from 'styled-components';
import ScrollReveal from './ScrollReveal';

import { HiOutlineSparkles, HiOutlineHand, HiOutlineUserGroup, IconType } from 'react-icons/hi';

type IconComponent = IconType;

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
`;

const AboutText = styled.div`
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #f5f5f5;
  }

  p {
    margin-bottom: 20px;
    color: #ccc;
    font-size: 16px;
    line-height: 1.7;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  .feature-icon {
    width: 24px;
    height: 24px;
    color: #D2691E;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .feature-content {
    h4 {
      color: #D2691E;
      font-size: 18px;
      margin-bottom: 8px;
      margin: 0 0 8px 0;
    }

    p {
      color: #ccc;
      font-size: 14px;
      margin: 0;
      line-height: 1.5;
    }
  }
`;

const AboutImage = styled.div`
  height: 400px;
  background: linear-gradient(135deg, #3a3a3a, #2a2a2a);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #D2691E;
`;

const PlaceholderImageLarge = styled.div`
  color: #D2691E;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(45deg, #D2691E, #8B4513);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const About: React.FC = () => {
  const features: Array<{
    id: number;
    icon: IconComponent;
    title: string;
    description: string;
  }> = [
    {
      id: 1,
      icon: HiOutlineSparkles,
      title: 'Натуральные материалы',
      description: 'Только лучшая натуральная кожа высшего качества'
    },
    {
      id: 2,
      icon: HiOutlineHand,
      title: 'Ручная работа',
      description: 'Каждое изделие создается вручную с любовью и вниманием'
    },
    {
      id: 3,
      icon: HiOutlineUserGroup,
      title: 'Индивидуальный подход',
      description: 'Возможность кастомизации и персонализации каждого заказа'
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <ScrollReveal>
            <AboutText>
              <h2>О мастерской Василины</h2>
              <p>Мы создаем уникальные кожаные изделия ручной работы уже более 10 лет. Каждый предмет проходит через наши руки, получая душу и характер.</p>
              <p>Мы используем только натуральную кожу высшего качества и традиционные методы обработки, которые передаются из поколения в поколение.</p>
              <Features>
                {features.map((feature, index) => (
                  <ScrollReveal key={feature.id} delay={index * 0.1}>
                    <FeatureItem>
                      <div className="feature-icon">{React.createElement(feature.icon)}</div>
                      <div className="feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </FeatureItem>
                  </ScrollReveal>
                ))}
              </Features>
            </AboutText>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <AboutImage>
              <PlaceholderImageLarge>Мастерская</PlaceholderImageLarge>
            </AboutImage>
          </ScrollReveal>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
