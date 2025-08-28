import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineUser,
  HiOutlineDeviceMobile,
  HiOutlineChat,
  HiOutlinePaperAirplane,
  HiOutlineChatAlt2,
  HiOutlineGlobeAlt,
  HiOutlinePhotograph,
  HiOutlineCash
} from 'react-icons/hi';

type IconComponent = React.ComponentType<{ size?: number | string; color?: string }>;


const ContactsSection = styled.section`
  min-height: 100vh;
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
      radial-gradient(circle at 20% 30%, rgba(210, 105, 30, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 20px 100px;
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 100px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  margin-bottom: 25px;
  color: #f5f5f5;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;

  span {
    background: linear-gradient(135deg, #D2691E, #8B4513);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  opacity: 0.9;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
`;

const ContactCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 25px;
  padding: 40px 35px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

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

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #D2691E, #8B4513);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 25px;
  color: white;
  position: relative;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #D2691E, #8B4513);
    border-radius: 22px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const CardTitle = styled.h3`
  color: #f5f5f5;
  font-size: 22px;
  margin-bottom: 18px;
  font-weight: 700;
  position: relative;
  z-index: 3;
`;

const CardContent = styled.div`
  color: #ccc;
  line-height: 1.7;
  position: relative;
  z-index: 3;

  p {
    margin: 0 0 12px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #f5f5f5;
    font-weight: 600;
  }

  a {
    color: #D2691E;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '→';
      margin-left: 5px;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #8B4513;

      &::after {
        transform: translateX(3px);
      }
    }
  }
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MapSection = styled.div`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 25px;
  padding: 40px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(210, 105, 30, 0.05) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const MapIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  opacity: 0.7;
`;

const MapTitle = styled.h4`
  color: #f5f5f5;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

const MapAddress = styled.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.6;
`;

const MapButton = styled(motion.button)`
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(210, 105, 30, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const ContactForm = styled.div`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 25px;
  padding: 40px;
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
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

const FormTitle = styled.h3`
  color: #f5f5f5;
  font-size: 28px;
  margin-bottom: 12px;
  font-weight: 700;
`;

const FormSubtitle = styled.p`
  color: #ccc;
  font-size: 15px;
  opacity: 0.8;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  color: #888;
  font-size: 16px;
  z-index: 2;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Label = styled.label`
  color: #ccc;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 16px 16px 16px 50px;
  color: #f5f5f5;
  font-size: 15px;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #D2691E;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.1);

    & + ${InputIcon} {
      color: #D2691E;
    }
  }

  &::placeholder {
    color: #888;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 16px 16px 16px 50px;
  color: #f5f5f5;
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  width: 100%;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #D2691E;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #D2691E, #8B4513);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 20px 40px rgba(210, 105, 30, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SocialSection = styled.div`
  text-align: center;
  margin-top: 80px;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const SocialTitle = styled.h3`
  color: #f5f5f5;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const SocialSubtitle = styled.p`
  color: #ccc;
  margin-bottom: 40px;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  color: #ccc;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  svg {
    width: 24px;
    height: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #D2691E, #8B4513);
    transform: scale(0);
    transition: transform 0.4s ease;
    border-radius: 18px;
  }

  &:hover {
    color: white;
    border-color: #D2691E;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(210, 105, 30, 0.2);

    &::before {
      transform: scale(1);
    }
  }
`;

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactItems: Array<{
    id: number;
    icon: IconComponent;
    title: string;
    content: React.ReactNode;
  }> = [
    {
      id: 1,
      icon: HiOutlineLocationMarker,
      title: 'Адрес мастерской',
      content: (
        <>
          <p><strong>ул. Кожевенная, д. 15</strong></p>
          <p>Москва, Россия, 107005</p>
          <p>Метро: Курская, Чкаловская</p>
          <a href="https://maps.google.com/?q=ул. Кожевенная, д. 15, Москва" target="_blank" rel="noopener noreferrer">
            Посмотреть на карте
          </a>
        </>
      )
    },
    {
      id: 2,
      icon: HiOutlinePhone,
      title: 'Телефон',
      content: (
        <>
          <p><strong>+7 (495) 123-45-67</strong></p>
          <p><strong>+7 (800) 555-01-23</strong> (бесплатно)</p>
          <p>Ежедневно с 9:00 до 21:00</p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>МСК / СПБ / ЕКБ</p>
        </>
      )
    },
    {
      id: 3,
      icon: HiOutlineMail,
      title: 'Email',
      content: (
        <>
          <p><a href="mailto:info@leathercraft.ru">info@leathercraft.ru</a></p>
          <p><a href="mailto:orders@leathercraft.ru">orders@leathercraft.ru</a></p>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>Ответ в течение 2 часов</p>
        </>
      )
    },
    {
      id: 4,
      icon: HiOutlineClock,
      title: 'Режим работы',
      content: (
        <>
          <p><strong>Понедельник - Пятница:</strong></p>
          <p>10:00 - 19:00</p>
          <p><strong>Суббота - Воскресенье:</strong></p>
          <p>11:00 - 17:00</p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>Без выходных по предварительной записи</p>
        </>
      )
    },
    {
      id: 5,
      icon: HiOutlineTruck,
      title: 'Доставка',
      content: (
        <>
          <p><strong>По Москве:</strong> от 300₽</p>
          <p><strong>По России:</strong> от 500₽</p>
          <p><strong>Самовывоз:</strong> бесплатно</p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>Курьер / Почта России / СДЭК</p>
        </>
      )
    },
    {
      id: 6,
      icon: HiOutlineCreditCard,
      title: 'Оплата',
      content: (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <HiOutlineCash style={{ color: '#D2691E', fontSize: '16px' }} />
            <span>Наличными при получении</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <HiOutlineCreditCard style={{ color: '#D2691E', fontSize: '16px' }} />
            <span>Банковской картой</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <HiOutlineCreditCard style={{ color: '#D2691E', fontSize: '16px' }} />
            <span>Переводом на карту</span>
          </div>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>Безопасная оплата</p>
        </>
      )
    }
  ];

  return (
    <ContactsSection>
      <Container>
        <HeroSection>
          <ScrollReveal>
            <Title>
              Свяжитесь <span>с нами</span>
            </Title>
            <Subtitle>
              Готовы обсудить ваш уникальный проект или ответить на все вопросы.
              Мы ценим каждого клиента и стремимся к совершенству в каждой детали.
            </Subtitle>
          </ScrollReveal>
        </HeroSection>

        <MainContent>
          <ContactCardsGrid>
            {contactItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <ContactCard
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CardIcon>{React.createElement(item.icon)}</CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardContent>{item.content}</CardContent>
                </ContactCard>
              </ScrollReveal>
            ))}
          </ContactCardsGrid>

          <SidePanel>
            <ScrollReveal delay={0.3}>
              <MapSection>
                <MapIcon>{React.createElement(HiOutlineLocationMarker as any)}</MapIcon>
                <MapTitle>🏢 Мастерская Василины</MapTitle>
                <MapAddress>
                  ул. Кожевенная, д. 15<br />
                  Москва, Россия, 107005<br />
                  Метро: Курская, Чкаловская
                </MapAddress>
                <MapButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://maps.google.com/?q=ул. Кожевенная, д. 15, Москва', '_blank')}
                >
                  {React.createElement(HiOutlineLocationMarker as any)} Открыть в Google Maps
                </MapButton>
              </MapSection>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <ContactForm>
                <FormHeader>
                  <FormTitle>{React.createElement(HiOutlineChat as any)} Напишите нам</FormTitle>
                  <FormSubtitle>
                    Оставьте сообщение и мы свяжемся с вами в ближайшее время
                  </FormSubtitle>
                </FormHeader>
                <form onSubmit={handleSubmit}>
                  <FormGrid>
                    <FormGroup>
                      <Label htmlFor="name">
                        {React.createElement(HiOutlineUser as any)} Ваше имя *
                      </Label>
                      <InputWrapper>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Иван Иванов"
                          required
                        />
                        <InputIcon>{React.createElement(HiOutlineUser as any)}</InputIcon>
                      </InputWrapper>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">
                        {React.createElement(HiOutlineMail as any)} Email *
                      </Label>
                      <InputWrapper>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ivan@example.com"
                          required
                        />
                        <InputIcon>{React.createElement(HiOutlineMail as any)}</InputIcon>
                      </InputWrapper>
                    </FormGroup>
                  </FormGrid>
                  <FormGroup>
                    <Label htmlFor="phone">
                      {React.createElement(HiOutlineDeviceMobile as any)} Телефон
                    </Label>
                    <InputWrapper>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (___) ___-__-__"
                      />
                      <InputIcon>{React.createElement(HiOutlineDeviceMobile as any)}</InputIcon>
                    </InputWrapper>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message">
                      {React.createElement(HiOutlineChat as any)} Сообщение *
                    </Label>
                    <InputWrapper>
                      <TextArea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Расскажите о вашем проекте, пожеланиях или задайте вопрос..."
                        required
                      />
                      <InputIcon style={{ top: '16px' }}>{React.createElement(HiOutlineChat as any)}</InputIcon>
                    </InputWrapper>
                  </FormGroup>
                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        {React.createElement(HiOutlineChatAlt2 as any)} Отправка...
                      </>
                    ) : (
                      <>
                        {React.createElement(HiOutlinePaperAirplane as any)} Отправить сообщение
                      </>
                    )}
                  </SubmitButton>
                </form>
              </ContactForm>
            </ScrollReveal>
          </SidePanel>
        </MainContent>

        <ScrollReveal delay={0.7}>
          <SocialSection>
            <SocialTitle>🌐 Следите за нами</SocialTitle>
            <SocialSubtitle>
              Присоединяйтесь к нашему сообществу и будьте в курсе новинок
            </SocialSubtitle>
            <SocialLinks>
              <SocialLink
                href="https://vk.com/vasilina_leather"
                target="_blank"
                title="ВКонтакте"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineGlobeAlt />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/vasilina_leather"
                target="_blank"
                title="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlinePhotograph />
              </SocialLink>
              <SocialLink
                href="https://t.me/vasilina_leather"
                target="_blank"
                title="Telegram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineChat />
              </SocialLink>
              <SocialLink
                href="https://wa.me/74951234567"
                target="_blank"
                title="WhatsApp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineDeviceMobile />
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </ScrollReveal>
      </Container>
    </ContactsSection>
  );
};

export default Contacts;
