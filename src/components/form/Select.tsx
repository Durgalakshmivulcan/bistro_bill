import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  options?: Option[];
};

export default function Select({
  label,
  required = false,
  value,
  onChange,
  options = [],
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* LABEL */}
      {label && (
        <label className="text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* SELECT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full mt-1 border rounded-md px-3 py-2 bg-white text-sm flex justify-between items-center"
      >
        {selected?.label || "Select"}
        <ChevronDown size={14} />
      </button>

      {/* OPTIONS */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border rounded-md shadow">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
