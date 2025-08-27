import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Классический кошелек',
    shortDescription: 'Элегантный кошелек из натуральной кожи',
    description: 'Элегантный кошелек из натуральной кожи с ручной отделкой. Выполнен из высококачественной телячьей кожи, которая со временем приобретает благородный патиной. Внутри 4 отделения для карт и одно для купюр. Ручная строчка, латунная фурнитура.',
    price: 3500,
    originalPrice: 4200,
    image: 'Кошелек',
    images: [
      { id: 1, url: '/images/Кошелек.jpg', alt: 'Классический кошелек вид спереди', isPrimary: true },
      { id: 2, url: '/images/Кошелек_внутри.jpg', alt: 'Классический кошелек вид внутри', isPrimary: false },
      { id: 3, url: '/images/Кошелек_бок.jpg', alt: 'Классический кошелек вид сбоку', isPrimary: false }
    ],
    category: 'wallets',
    rating: 4.8,
    reviewCount: 24,
    orderCount: 156,
    reviews: [
      {
        id: 1,
        author: 'Алексей М.',
        rating: 5,
        comment: 'Отличный кошелек! Качество на высоте, швы ровные, кожа мягкая.',
        date: '2024-01-15',
        verified: true
      },
      {
        id: 2,
        author: 'Мария К.',
        rating: 5,
        comment: 'Очень довольна покупкой. Кошелек удобный, все отделения функциональные.',
        date: '2024-01-10',
        verified: true
      }
    ],
    parameters: [
      { id: 1, name: 'Материал', value: 'Телячья кожа' },
      { id: 2, name: 'Размеры', value: '10×9×2 см' },
      { id: 3, name: 'Вес', value: '120 г' },
      { id: 4, name: 'Цвет', value: 'Темно-коричневый' },
      { id: 5, name: 'Производство', value: 'Ручная работа' }
    ],
    inStock: true,
    stockCount: 8,
    tags: ['классика', 'мужской', 'повседневный'],
    createdAt: '2023-12-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Мужской ремень',
    shortDescription: 'Качественный ремень из натуральной кожи',
    description: 'Качественный ремень из натуральной кожи с латунной пряжкой. Выполнен из прочной говяжьей кожи толщиной 3мм. Латунная пряжка с гравировкой логотипа мастерской. Подходит для повседневного использования и деловых встреч.',
    price: 4200,
    image: 'Ремень',
    images: [
      { id: 1, url: '/images/Ремень.jpg', alt: 'Мужской ремень вид спереди', isPrimary: true },
      { id: 2, url: '/images/Ремень_пряжка.jpg', alt: 'Мужской ремень пряжка крупно', isPrimary: false }
    ],
    category: 'belts',
    rating: 4.9,
    reviewCount: 31,
    orderCount: 203,
    reviews: [
      {
        id: 3,
        author: 'Дмитрий П.',
        rating: 5,
        comment: 'Отличный ремень! Носил уже месяц, кожа не царапается, пряжка удобная.',
        date: '2024-01-20',
        verified: true
      }
    ],
    parameters: [
      { id: 6, name: 'Материал', value: 'Говяжья кожа' },
      { id: 7, name: 'Длина', value: '120 см' },
      { id: 8, name: 'Ширина', value: '3 см' },
      { id: 9, name: 'Цвет', value: 'Черный' },
      { id: 10, name: 'Пряжка', value: 'Латунь с гравировкой' }
    ],
    inStock: true,
    stockCount: 12,
    tags: ['ремень', 'мужской', 'классика'],
    createdAt: '2023-12-05',
    updatedAt: '2024-01-20'
  },
  {
    id: 3,
    name: 'Женская сумка',
    shortDescription: 'Стильная сумка из натуральной кожи',
    description: 'Стильная сумка из натуральной кожи с минималистичным дизайном. Выполнена из мягкой телячьей кожи. Внутри два отделения с карманами. Регулируемый плечевой ремень. Идеально подходит для повседневного использования.',
    price: 8900,
    originalPrice: 10500,
    image: 'Сумка',
    images: [
      { id: 4, url: '/images/Сумка.jpg', alt: 'Женская сумка вид спереди', isPrimary: true },
      { id: 5, url: '/images/Сумка_внутри.jpg', alt: 'Женская сумка вид внутри', isPrimary: false },
      { id: 6, url: '/images/Сумка_бок.jpg', alt: 'Женская сумка вид сбоку', isPrimary: false }
    ],
    category: 'bags',
    rating: 4.7,
    reviewCount: 18,
    orderCount: 89,
    reviews: [
      {
        id: 4,
        author: 'Елена С.',
        rating: 5,
        comment: 'Прекрасная сумка! Качество отличное, кожа мягкая, очень удобная.',
        date: '2024-01-12',
        verified: true
      }
    ],
    parameters: [
      { id: 11, name: 'Материал', value: 'Телячья кожа' },
      { id: 12, name: 'Размеры', value: '25×20×10 см' },
      { id: 13, name: 'Вес', value: '650 г' },
      { id: 14, name: 'Цвет', value: 'Бежевый' },
      { id: 15, name: 'Ремень', value: 'Регулируемый, 120 см' }
    ],
    inStock: true,
    stockCount: 5,
    tags: ['сумка', 'женская', 'повседневная'],
    createdAt: '2023-12-10',
    updatedAt: '2024-01-12'
  },
  {
    id: 4,
    name: 'Ключница',
    shortDescription: 'Практичная ключница из натуральной кожи',
    description: 'Практичная ключница из натуральной кожи с гравировкой. Выполнена из прочной кожи с латунными кольцами. На лицевой стороне гравировка логотипа мастерской. Идеально подходит для хранения ключей и брелоков.',
    price: 1800,
    image: 'Ключница',
    category: 'accessories',
    rating: 4.6,
    reviewCount: 12,
    orderCount: 67,
    parameters: [
      { id: 16, name: 'Материал', value: 'Кожа' },
      { id: 17, name: 'Размеры', value: '8×6 см' },
      { id: 18, name: 'Цвет', value: 'Коричневый' },
      { id: 19, name: 'Крепление', value: 'Латунные кольца' }
    ],
    inStock: true,
    stockCount: 15,
    tags: ['ключница', 'аксессуар', 'практичный'],
    createdAt: '2023-12-15',
    updatedAt: '2024-01-05'
  },
  {
    id: 5,
    name: 'Кожаные перчатки',
    shortDescription: 'Теплые перчатки из натуральной кожи',
    description: 'Теплые перчатки из натуральной кожи с подкладкой из натуральной шерсти. Выполнены из мягкой козьей кожи. Усиленные пальцы и ладонь. Идеально подходят для зимнего периода.',
    price: 5200,
    image: 'Перчатки',
    category: 'accessories',
    rating: 4.5,
    reviewCount: 9,
    orderCount: 34,
    parameters: [
      { id: 20, name: 'Материал', value: 'Козья кожа' },
      { id: 21, name: 'Подкладка', value: 'Натуральная шерсть' },
      { id: 22, name: 'Размеры', value: 'Универсальный' },
      { id: 23, name: 'Цвет', value: 'Темно-коричневый' }
    ],
    inStock: false,
    stockCount: 0,
    tags: ['перчатки', 'зима', 'теплые'],
    createdAt: '2023-12-20',
    updatedAt: '2024-01-08'
  },
  {
    id: 6,
    name: 'Бизнес-портфель',
    shortDescription: 'Элегантный портфель для деловых встреч',
    description: 'Элегантный портфель для деловых встреч и повседневного использования. Выполнен из высококачественной кожи. Внутри несколько отделений для документов, планшета и ноутбука. Регулируемый плечевой ремень.',
    price: 12500,
    originalPrice: 15000,
    image: 'Портфель',
    images: [
      { id: 7, url: '/images/Портфель.jpg', alt: 'Бизнес-портфель вид спереди', isPrimary: true },
      { id: 8, url: '/images/Портфель_внутри.jpg', alt: 'Бизнес-портфель вид внутри', isPrimary: false }
    ],
    category: 'bags',
    rating: 4.9,
    reviewCount: 15,
    orderCount: 42,
    reviews: [
      {
        id: 5,
        author: 'Иван П.',
        rating: 5,
        comment: 'Отличный портфель! Много отделений, удобный, качество на высоте.',
        date: '2024-01-18',
        verified: true
      }
    ],
    parameters: [
      { id: 24, name: 'Материал', value: 'Кожа premium' },
      { id: 25, name: 'Размеры', value: '40×30×12 см' },
      { id: 26, name: 'Вес', value: '1200 г' },
      { id: 27, name: 'Цвет', value: 'Черный' },
      { id: 28, name: 'Ремень', value: 'Регулируемый, 140 см' }
    ],
    inStock: true,
    stockCount: 3,
    tags: ['портфель', 'бизнес', 'документы'],
    createdAt: '2023-12-25',
    updatedAt: '2024-01-18'
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}


