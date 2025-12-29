
export interface Plan {
  id: string;
  name: string;
  speed: number;
  description: string;
  price: number;
  regularPrice: number;
  isPopular?: boolean;
  feature: string;
  featureIcon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
