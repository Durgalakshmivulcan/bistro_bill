export interface CatalogProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "Idly with Sambar",
    price: 60,
    imageUrl: "images/products/Idli-Sambar.jpg",
    category: "Breakfast",
    type: "Regular",
  },
  {
    id: 2,
    name: "Paneer Curry Combo",
    price: 80,
    imageUrl: "images/products/paneer-curry.jpg",
    category: "Main Course",
    type: "Regular",
  },
  {
    id: 3,
    name: "Veg Fried Rice",
    price: 40,
    imageUrl: "images/products/veg-fried-rice.jpg",
    category: "Rice",
    type: "Regular",
  },
  {
    id: 4,
    name: "Andhra Thali (Veg)",
    price: 120,
    imageUrl: "images/products/Mini-Thali.webp",
    category: "Thali",
    type: "Combo",
  },
  {
    id: 5,
    name: "Veg Grilled Sandwich",
    price: 80,
    imageUrl: "/images/products/veg-grilled-sandwich.jpg",
    category: "Snacks",
    type: "Regular",
  },
  {
    id: 6,
    name: "Curd Rice",
    price: 130,
    imageUrl: "/images/products/South-indian-curd-rice.jpg",
    category: "Rice",
    type: "Regular",
  },
];
