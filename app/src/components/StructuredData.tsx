import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Мастерская Василины",
    "url": "https://vasilina-leather.ru",
    "logo": "https://vasilina-leather.ru/logo.png",
    "description": "Мастерская по производству премиум кожаных изделий ручной работы",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кожевенная, д. 15",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-495-123-45-67",
      "contactType": "customer service",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://vk.com/vasilina_leather",
      "https://instagram.com/vasilina_leather"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Мастерская Василины",
    "url": "https://vasilina-leather.ru",
    "description": "Интернет-магазин премиум кожаных изделий ручной работы",
    "publisher": {
      "@type": "Organization",
      "name": "Мастерская Василины"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vasilina-leather.ru/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
