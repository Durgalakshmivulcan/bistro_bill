import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number | string;
  image?: string;
  imageUrl?: string;
}

const ProductCard = ({ name, price, image, imageUrl }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  const imgSrc = imageUrl || image || "/placeholder.jpg";

  return (
    <div className="relative bg-white border border-bb-border rounded-lg p-3 flex gap-3">

      {/* Image */}
      <img
        src={imgSrc}
        alt={name}
        className="w-16 h-12 rounded object-cover bg-gray-100"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-bb-textSoft">
          Price : {typeof price === "number" ? `₹ ${price}` : price}
        </div>
      </div>

      {/* Menu Button */}
      <button
        className="text-gray-400 hover:text-gray-600"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-2 top-10 z-10 w-32 bg-white border border-bb-border rounded-md shadow-md text-sm">
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50">
            <i className="bi bi-eye"></i> View
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50">
            <i className="bi bi-pencil"></i> Edit
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 text-red-600">
            <i className="bi bi-trash"></i> Delete
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50">
            <i className="bi bi-star"></i> Favorite
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
