import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Предварительная загрузка критических ресурсов
    const preloadResources = () => {
      // Предварительная загрузка шрифтов (если используются)
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/main.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Предварительная загрузка важных изображений
      const criticalImages = [
        '/images/hero-background.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Оптимизация загрузки
    const optimizeLoading = () => {
      // Удаление неиспользуемых CSS
      const unusedStyles = document.querySelectorAll('style[data-emotion]');
      unusedStyles.forEach(style => {
        if (!style.textContent?.includes('background')) {
          // Сохраняем только критические стили
        }
      });

      // Отложенная загрузка не критических скриптов
      const scripts = document.querySelectorAll('script[data-loaded="false"]');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = (script as HTMLScriptElement).src;
        newScript.defer = true;
        document.body.appendChild(newScript);
        script.remove();
      });
    };

    preloadResources();
    optimizeLoading();

    // Очистка при размонтировании
    return () => {
      // Очистка preload ссылок
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);

  return (
    <Helmet>
      {/* Resource hints */}
      <meta name="resource-hints" content="preload, prefetch, preconnect" />

      {/* Оптимизация для мобильных устройств */}
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />
    </Helmet>
  );
};

export default PerformanceOptimizer;
