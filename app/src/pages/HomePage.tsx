import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import {
  HiOutlineSparkles,
  HiOutlineHand,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineReply,
  HiOutlineViewGrid,
  HiOutlineStar
} from 'react-icons/hi';

// Простой компонент для анимации чисел
const CountUp: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Секция преимуществ
const AdvantagesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(210, 105, 30, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 80px;
  color: #f5f5f5;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
    border-radius: 2px;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

const AdvantageCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 25px;
  padding: 40px 35px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(210, 105, 30, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 25px 50px rgba(210, 105, 30, 0.15),
      0 0 0 1px rgba(210, 105, 30, 0.1);
    border-color: rgba(210, 105, 30, 0.2);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      width: 200px;
      height: 200px;
    }
  }
`;

const AdvantageIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 25px;
  color: white;
  position: relative;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, #D2691E, #8B4513);
    border-radius: 23px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const AdvantageTitle = styled.h3`
  color: #f5f5f5;
  font-size: 24px;
  margin-bottom: 18px;
  font-weight: 700;
  position: relative;
  z-index: 3;
`;

const AdvantageDescription = styled.p`
  color: #ccc;
  line-height: 1.7;
  position: relative;
  z-index: 3;
  margin: 0;
`;

// Секция популярных товаров
const PopularSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`;

const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  padding: 18px 40px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  margin: 40px auto 0;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  svg {
    width: 18px;
    height: 18px;
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

// Секция "Почему выбирают нас"
const WhyChooseSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #141414 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 30% 20%, rgba(210, 105, 30, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 69, 19, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
  margin-top: 80px;
`;

const WhyChooseItem = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const WhyChooseIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(210, 105, 30, 0.1), rgba(139, 69, 19, 0.1));
  border: 2px solid rgba(210, 105, 30, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 40px;
  color: #D2691E;
  transition: all 0.4s ease;

  ${WhyChooseItem}:hover & {
    background: linear-gradient(135deg, #D2691E, #8B4513);
    color: white;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(210, 105, 30, 0.3);
  }
`;

const WhyChooseTitle = styled.h3`
  color: #f5f5f5;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const WhyChooseDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  font-size: 15px;
  margin: 0;
`;

// Секция статистики
const StatsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 25% 25%, rgba(210, 105, 30, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 60px;
  margin-top: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const StatNumber = styled.div`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  color: #D2691E;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const StatLabel = styled.div`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HomePage: React.FC = () => {
  // Получаем 3 самых популярных товара (с наибольшим количеством заказов)
  const popularProducts = [...products]
    .sort((a, b) => b.orderCount - a.orderCount)
    .slice(0, 3);

  const advantages = [
    {
      id: 1,
      icon: HiOutlineSparkles,
      title: 'Натуральные материалы',
      description: 'Только лучшая натуральная кожа высшего качества из проверенных поставщиков'
    },
    {
      id: 2,
      icon: HiOutlineHand,
      title: 'Ручная работа',
      description: 'Каждое изделие создается вручную с любовью и вниманием к деталям'
    },
    {
      id: 3,
      icon: HiOutlineUserGroup,
      title: 'Индивидуальный подход',
      description: 'Возможность кастомизации и персонализации каждого заказа под ваши пожелания'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: HiOutlineStar,
      title: 'Высокое качество',
      description: 'Используем только премиум материалы и современное оборудование'
    },
    {
      id: 2,
      icon: HiOutlineTruck,
      title: 'Быстрая доставка',
      description: 'Доставляем заказы по всей России в кратчайшие сроки'
    },
    {
      id: 3,
      icon: HiOutlineCreditCard,
      title: 'Удобная оплата',
      description: 'Различные способы оплаты для вашего удобства'
    },
    {
      id: 4,
      icon: HiOutlineReply,
      title: 'Возврат товара',
      description: '14 дней на возврат товара при соблюдении условий'
    }
  ];

  return (
    <>
      <Hero />

      {/* Преимущества мастерской */}
      <AdvantagesSection>
        <Container>
          <ScrollReveal>
            <SectionTitle>Наши преимущества</SectionTitle>
          </ScrollReveal>

          <AdvantagesGrid>
            {advantages.map((advantage, index) => (
              <ScrollReveal key={advantage.id} delay={index * 0.2}>
                <AdvantageCard
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <AdvantageIcon>
                    <advantage.icon />
                  </AdvantageIcon>
                  <AdvantageTitle>{advantage.title}</AdvantageTitle>
                  <AdvantageDescription>{advantage.description}</AdvantageDescription>
                </AdvantageCard>
              </ScrollReveal>
            ))}
          </AdvantagesGrid>
        </Container>
      </AdvantagesSection>

      {/* Популярные товары */}
      <PopularSection>
        <Container>
          <ScrollReveal>
            <SectionTitle>Популярные изделия</SectionTitle>
          </ScrollReveal>

          <PopularGrid>
            {popularProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </PopularGrid>

          <div style={{ textAlign: 'center' }}>
            <ScrollReveal delay={0.3}>
              <ViewAllButton to="/products">
                <HiOutlineViewGrid />
                Посмотреть весь каталог
              </ViewAllButton>
            </ScrollReveal>
          </div>
        </Container>
      </PopularSection>

      {/* Почему выбирают нас */}
      <WhyChooseSection>
        <Container>
          <ScrollReveal>
            <SectionTitle>Почему выбирают нас</SectionTitle>
          </ScrollReveal>

          <WhyChooseGrid>
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.15}>
                <WhyChooseItem
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <WhyChooseIcon>
                    <item.icon />
                  </WhyChooseIcon>
                  <WhyChooseTitle>{item.title}</WhyChooseTitle>
                  <WhyChooseDescription>{item.description}</WhyChooseDescription>
                </WhyChooseItem>
              </ScrollReveal>
            ))}
          </WhyChooseGrid>
        </Container>
      </WhyChooseSection>

      {/* Статистика мастерской */}
      <StatsSection>
        <Container>
          <ScrollReveal>
            <SectionTitle>Цифры говорят сами за себя</SectionTitle>
          </ScrollReveal>

          <StatsGrid>
            <ScrollReveal delay={0.1}>
              <StatItem>
                <StatNumber>
                  <CountUp end={10} duration={2} suffix="+" />
                </StatNumber>
                <StatLabel>Лет опыта</StatLabel>
              </StatItem>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <StatItem>
                <StatNumber>
                  <CountUp end={1500} duration={2} suffix="+" />
                </StatNumber>
                <StatLabel>Довольных клиентов</StatLabel>
              </StatItem>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <StatItem>
                <StatNumber>
                  <CountUp end={5000} duration={2} suffix="+" />
                </StatNumber>
                <StatLabel>Созданных изделий</StatLabel>
              </StatItem>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <StatItem>
                <StatNumber>
                  <CountUp end={98} duration={2} suffix="%" />
                </StatNumber>
                <StatLabel>Уровень качества</StatLabel>
              </StatItem>
            </ScrollReveal>
          </StatsGrid>
        </Container>
      </StatsSection>

      <Testimonials />
    </>
  );
};

export default HomePage;
