import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #f5f5f5;
    background:
      radial-gradient(circle at 20% 80%, rgba(210, 105, 30, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.08) 0%, transparent 50%),
      linear-gradient(135deg, #1a1a1a 0%, #141414 100%);
    overflow-x: hidden;
  }

  /* Fluid typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #f5f5f5;
    text-decoration: none;
    border-bottom: none;
  }

  h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); }
  h4 { font-size: clamp(1.25rem, 2.5vw, 1.75rem); }

  p {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.7;
    color: #ccc;
  }

  /* Улучшенные кнопки */
  .cta-button, button {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.875rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(210, 105, 30, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Убираем подчеркивание у всех ссылок */
  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  /* Сглаживание скролла для лучшей анимации */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Респонсивность */
  @media (max-width: 768px) {
    .nav {
      display: none !important;
    }

    .about-content {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    .products-grid {
      grid-template-columns: 1fr !important;
    }

    .contact-info {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 15px !important;
    }

    .hero-content h2 {
      font-size: 28px !important;
    }

    .catalog h2,
    .contacts h2,
    .about-text h2 {
      font-size: 28px !important;
    }
  }
`;

export default GlobalStyles;
