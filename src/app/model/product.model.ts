export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  category: string;
}
export interface ProductDetailsResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
