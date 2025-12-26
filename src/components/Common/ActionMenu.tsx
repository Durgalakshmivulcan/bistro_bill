import React, { useEffect, useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";


type Props = {
  onEdit?: () => void;
  onDelete?: () => void;
};

const ActionMenu: React.FC<Props> = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-xl px-2"
      >
        ⋮
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
          <button
            onClick={() => {
              onEdit?.();
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
          >
            <Pencil size={16} className="text-gray-700" />
             Edit
          </button>

          <button
            onClick={() => {
              onDelete?.();
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
          >
             <Trash2 size={16} />
             Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
