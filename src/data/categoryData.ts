export type Category = {
  id: number;
  name: string;
  image: string;
  description: string;
  status: "Active" | "Inactive";
};

export const categoryData: Category[] = [
  {
    id: 1,
    name: "Appetizers",
    image: "/images/categories/appetizers.png",
    description: "Tasty starters to kick off your hunger.",
    status: "Active",
  },
  {
    id: 2,
    name: "Main Courses",
    image: "/images/categories/main-course.png",
    description: "Hearty dishes that satisfy your hunger.",
    status: "Active",
  },
  {
    id: 3,
    name: "Thalis",
    image: "/images/categories/thali.png",
    description: "Platter of diverse flavors in one meal.",
    status: "Active",
  },
  {
    id: 4,
    name: "Rice Dishes",
    image: "/images/categories/rice.png",
    description: "Flavorful rice preparations for all tastes.",
    status: "Active",
  },
  {
    id: 5,
    name: "Curries",
    image: "/images/categories/curry.png",
    description: "Rich and aromatic curries for spice lovers.",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Combos",
    image: "/images/categories/combo.png",
    description: "Value meals combining dishes and drinks.",
    status: "Active",
  },
];
