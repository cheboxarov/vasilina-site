# LeatherCraft - React TypeScript

Элегантный сайт по продаже премиальной кожгалантереи, созданный на React с TypeScript. Современное веб-приложение с фокусом на пользовательский опыт и производительность.

## Технологии

- **React 19** с TypeScript
- **Styled Components** для модульной стилизации
- **React Router v6** для клиентской маршрутизации
- **React Helmet Async** для SEO оптимизации
- **Framer Motion** для плавных анимаций
- **React Three Fiber/Drei** для 3D визуализации
- **React Intersection Observer** для оптимизации производительности
- **Responsive Design** для всех устройств

## Структура проекта

```
/
├── app/                      # Основное приложение React
│   ├── public/              # Статические файлы
│   │   ├── images/          # Изображения проекта
│   │   │   ├── about/       # Изображения раздела "О нас"
│   │   │   ├── hero/        # Главные изображения
│   │   │   ├── logo/        # Логотипы
│   │   │   ├── products/    # Изображения товаров
│   │   │   │   ├── accessories/
│   │   │   │   ├── bags/
│   │   │   │   ├── belts/
│   │   │   │   └── wallets/
│   │   │   └── testimonials/ # Отзывы клиентов
│   │   ├── index.html       # Главная HTML страница
│   │   ├── manifest.json    # Манифест PWA
│   │   ├── robots.txt       # Для поисковых систем
│   │   └── sitemap.xml      # Карта сайта
│   ├── src/                 # Исходный код приложения
│   │   ├── components/      # React компоненты
│   │   │   ├── ui/          # Переиспользуемые UI компоненты
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Container.tsx
│   │   │   │   ├── FilterButton.tsx
│   │   │   │   ├── ProductGallery.tsx
│   │   │   │   ├── ProductParameters.tsx
│   │   │   │   ├── ProductStats.tsx
│   │   │   │   ├── QuantitySelector.tsx
│   │   │   │   ├── RatingStars.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   └── SortDropdown.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Catalog.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contacts.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── LazyImage.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── StructuredData.tsx
│   │   │   └── PerformanceOptimizer.tsx
│   │   ├── pages/           # Страницы приложения
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── ProductDetailPage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   └── ContactsPage.tsx
│   │   ├── data/            # Данные приложения
│   │   │   └── products.ts
│   │   ├── styles/          # Глобальные стили
│   │   │   └── GlobalStyles.ts
│   │   ├── types.ts         # TypeScript типы
│   │   ├── App.tsx          # Главный компонент
│   │   ├── index.tsx        # Точка входа
│   │   └── App.css          # Стили приложения
│   ├── package.json         # Зависимости проекта
│   ├── tsconfig.json       # Конфигурация TypeScript
│   └── README.md           # Документация приложения
└── README.md               # Этот файл
```

## Особенности

- **Темная тема** с коричневыми акцентами и минималистичным дизайном
- **Плавные анимации** с использованием Framer Motion
- **Адаптивный дизайн** для всех устройств и экранов
- **Компонентная архитектура** для легкого сопровождения и расширения
- **TypeScript** для типобезопасности
- **SEO оптимизация** с мета-тегами и структурированными данными
- **Оптимизация производительности** с ленивой загрузкой и Intersection Observer
- **3D визуализация** для интерактивных элементов
- **Модульная система стилизации** с Styled Components

## Установка и запуск

```bash
# Переход в директорию приложения
cd app

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка для продакшена
npm run build

# Запуск тестов
npm test
```

Приложение будет доступно по адресу: `http://localhost:8080`

## Маршрутизация

- `/` - Главная страница с героями и отзывами
- `/products` - Каталог всех товаров
- `/products/:id` - Детальная страница товара
- `/about` - Информация о компании
- `/contacts` - Контактная информация

## Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- Мобильных устройств (320px+)
- Планшетов (768px+)
- Настольных компьютеров (1024px+)
- Широкоформатных мониторов (1440px+)

## Основные компоненты

### Header
Фиксированная навигационная панель с логотипом и меню

### Hero
Главная секция с призывом к действию и премиальным дизайном

### Catalog
Интерактивный каталог товаров с фильтрацией и сортировкой

### ProductCard
Карточка товара с изображением, ценой и характеристиками

### Testimonials
Раздел с отзывами клиентов

### StructuredData & SEO
Автоматическая генерация структурированных данных для поисковых систем

### PerformanceOptimizer
Оптимизация загрузки ресурсов и производительности

## Доступные скрипты

- `npm start` - Запуск приложения в режиме разработки
- `npm test` - Запуск тестового набора
- `npm run build` - Сборка приложения для продакшена
- `npm run eject` - Извлечение конфигурации (не рекомендуется)

## Зависимости

### Основные
- React 19.1.1
- TypeScript 4.9.5
- Styled Components 6.1.19

### Анимации и 3D
- Framer Motion 12.23.12
- Three.js 0.179.1
- React Three Fiber 9.3.0

### SEO и оптимизация
- React Helmet Async 2.0.5
- React Intersection Observer 9.16.0

### Маршрутизация
- React Router DOM 6.30.1

### UI компоненты
- React Icons 5.5.0

## Дизайн система

Приложение использует единую дизайн-систему:
- **Цветовая палитра**: Темные тона с коричневыми акцентами
- **Типографика**: Inter для основного текста, Playfair Display для заголовков
- **Компоненты**: Модульные и переиспользуемые UI элементы
- **Анимации**: Плавные переходы и интерактивные эффекты

## Деплой

### Разработка
```bash
# Запуск в режиме разработки
docker-compose up --build
```

### Продакшен
```bash
# Сборка и запуск в режиме продакшена
docker-compose -f docker-compose.prod.yml up --build -d

# Просмотр логов
docker-compose -f docker-compose.prod.yml logs -f leathercraft-app

# Остановка
docker-compose -f docker-compose.prod.yml down
```

### Проверка работы

После запуска приложение будет доступно:
- **Разработка**: `http://localhost:8080`
- **Продакшен**: Через внешний Nginx сервер (порт 80/443)

### Docker команды

```bash
# Очистка Docker образов и контейнеров
docker system prune -a

# Просмотр запущенных контейнеров
docker ps

# Просмотр логов конкретного контейнера
docker logs leathercraft-prod
```

### Архитектура развертывания

Приложение использует следующую архитектуру развертывания:

1. **Внешний Nginx сервер** (порт 80/443)
   - Обрабатывает SSL/TLS сертификаты
   - Проксирует запросы к приложению
   - Обеспечивает HTTPS и безопасность

2. **React приложение** (порт 8080)
   - Запущено в Docker контейнере
   - Принимает запросы от внешнего Nginx
   - Обрабатывает бизнес-логику

### Настройка внешнего Nginx

Используйте файл `nginx/nginx.conf` как пример конфигурации для внешнего сервера:

```bash
# На внешнем сервере с nginx
sudo cp nginx/nginx.conf /etc/nginx/sites-available/leathercraft
sudo ln -s /etc/nginx/sites-available/leathercraft /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Замените в конфигурации:
- `APP_SERVER_IP` - на IP адрес сервера с приложением
- `your-domain.com` - на ваше доменное имя
- пути к SSL сертификатам на реальные

### Переменные окружения

Создайте файл `.env` в директории `app/` со следующими переменными:

```bash
# Порт приложения (по умолчанию 8080 для продакшена)
PORT=8080

# Среда выполнения
NODE_ENV=development

# URL API (используется для клиентских запросов)
REACT_APP_API_URL=http://localhost:8080

# Настройки для продакшена
GENERATE_SOURCEMAP=false

# Опциональные переменные для аналитики
REACT_APP_GOOGLE_ANALYTICS_ID=
REACT_APP_YANDEX_METRIKA_ID=

# Настройки для SEO
REACT_APP_SITE_URL=https://your-domain.com
REACT_APP_SITE_NAME=LeatherCraft
REACT_APP_SITE_DESCRIPTION=Элегантный сайт по продаже премиальной кожгалантереи
```

### Поддерживаемые платформы
- Docker + внешний Nginx сервер
- Любая VPS/VDS с Docker поддержкой
- AWS ECS/EKS с Application Load Balancer
- Google Cloud Run с внешним Load Balancer

## Каталоги изображений

Проект содержит организованную структуру изображений:

### Товары (`app/public/images/products/`)
- **accessories/** - Аксессуары
- **bags/** - Сумки
- **belts/** - Ремни
- **wallets/** - Кошельки

### Контент (`app/public/images/`)
- **about/** - Изображения для раздела "О нас"
- **hero/** - Главные баннеры и изображения
- **logo/** - Логотипы и брендинг
- **testimonials/** - Фото клиентов и отзывы

## SEO оптимизация

Приложение включает комплексную SEO оптимизацию:
- Структурированные данные (JSON-LD)
- Мета-теги для каждой страницы
- Оптимизированные изображения
- Sitemap.xml
- Robots.txt
- Отзывчивый дизайн для мобильных устройств

## Производительность

- Ленивая загрузка изображений
- Код-сплиттинг
- Оптимизация бандла
- Intersection Observer для анимаций
- Минимизация перерисовок компонентов
