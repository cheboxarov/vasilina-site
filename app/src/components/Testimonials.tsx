import React from 'react';
import styled from 'styled-components';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D2691E, transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  color: #f5f5f5;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const TestimonialCard = styled.div`
  background: #2a2a2a;
  border-radius: 15px;
  padding: 30px;
  border: 1px solid #333;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 60px;
    color: #D2691E;
    opacity: 0.2;
    font-family: 'Playfair Display', serif;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(210, 105, 30, 0.15);
    border-color: #D2691E;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Star = styled.span`
  color: #D2691E;
  font-size: 18px;
  margin-left: 2px;
`;

const Content = styled.p`
  font-style: italic;
  margin-bottom: 25px;
  color: #ccc;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-right: 15px;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  margin: 0;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
`;

const Role = styled.span`
  color: #888;
  font-size: 14px;
  margin-top: 2px;
`;

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Елена К.",
      role: "Директор компании",
      content: "Качество изделий превзошло все ожидания. Каждый кошелек — это произведение искусства. Материал высшего качества, строчка идеальная.",
      rating: 5
    },
    {
      id: 2,
      name: "Андрей М.",
      role: "Коллекционер аксессуаров",
      content: "Искал идеальный ремень полгода. Нашел здесь. Фурнитура латунная, кожа натуральная, цена оправдана качеством.",
      rating: 5
    },
    {
      id: 3,
      name: "Мария С.",
      role: "Стилист",
      content: "Мои клиенты в восторге от сумок. Элегантно, качественно, уникально. Рекомендую всем, кто ценит ручную работу.",
      rating: 5
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <ScrollReveal>
          <Title>Отзывы наших клиентов</Title>
        </ScrollReveal>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.2}>
              <TestimonialCard>
                <Rating>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i}>★</Star>
                  ))}
                </Rating>
                <Content>"{testimonial.content}"</Content>
                <Author>
                  <Avatar>{testimonial.name[0]}</Avatar>
                  <AuthorInfo>
                    <Name>{testimonial.name}</Name>
                    <Role>{testimonial.role}</Role>
                  </AuthorInfo>
                </Author>
              </TestimonialCard>
            </ScrollReveal>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
