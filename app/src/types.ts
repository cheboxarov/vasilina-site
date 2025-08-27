export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ProductParameter {
  id: number;
  name: string;
  value: string;
}

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: ProductImage[];
  category: string;
  rating: number;
  reviewCount: number;
  orderCount: number;
  reviews?: ProductReview[];
  parameters?: ProductParameter[];
  inStock: boolean;
  stockCount?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface ContactItem {
  id: number;
  title: string;
  content: string;
}
