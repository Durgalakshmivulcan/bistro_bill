const MenuCard = ({
  tag,
  discount,
  disabled,
  image = "/images/menu/biryani.jpg",
}: {
  tag?: string;
  discount?: string;
  disabled?: boolean;
  image?: string;
}) => {
  return (
    <div
      className={`
        flex flex-col
        rounded-2xl
        bg-white
        p-3
        shadow-sm
        transition

        min-h-[240px]
        sm:min-h-[260px]

        md:hover:-translate-y-1
        md:hover:shadow-lg

        ${disabled ? "opacity-60" : ""}
      `}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={image}
          alt="menu item"
          className="h-full w-full object-cover object-center"
        />

        {/* Tag */}
        {tag && (
          <span
            className="
              absolute left-1.5 top-1.5
              sm:left-2 sm:top-2
              z-10
              rounded-full
              bg-white/90
              backdrop-blur
              px-2 py-0.5
              text-[10px] sm:text-xs
              font-medium
              whitespace-nowrap
            "
          >
            {tag}
          </span>
        )}

        {/* Discount */}
        {discount && (
          <span
            className="
              absolute right-1.5 top-1.5
              sm:right-2 sm:top-2
              z-10
              rounded-full
              bg-green-500
              px-2 py-0.5
              text-[10px] sm:text-xs
              font-medium
              text-white
              whitespace-nowrap
            "
          >
            {discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-3 flex flex-col">
        <h4 className="text-sm font-medium leading-snug line-clamp-2">
          Chicken Biryani
        </h4>

        <p className="mt-1 text-sm text-gray-500">₹160.00</p>

        <button
          disabled={disabled}
          className={`
            mt-3
            w-full
            rounded-lg
            py-2.5
            text-sm
            font-medium
            transition
            ${
              disabled
                ? "bg-gray-200 text-gray-500"
                : "bg-yellow-400 hover:bg-yellow-500 active:scale-95"
            }
          `}
        >
          {disabled ? "Not Available" : "+ Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
