import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title }: { title: string }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        bg-yellow-200
        px-4
        py-4
        font-medium
        cursor-pointer
        transition
        hover:bg-yellow-300
        active:scale-[0.99]
      "
    >
      <span className="text-sm">{title}</span>
      <ChevronDown size={18} />
    </div>
  );
};

export default AccordionItem;
