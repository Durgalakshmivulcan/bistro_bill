type ToggleProps = {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

const Toggle = ({ label, value = true, onChange }: ToggleProps) => (
  <div>
    <label className="text-sm font-medium">{label}</label>

    <div className="flex gap-6 mt-1 text-sm">
      {/* YES */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name={label}
          checked={value === true}
          onChange={() => onChange?.(true)}
          className="hidden peer/yes"
        />
        <span
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
            ${value ? "border-green-500" : "border-gray-400"}`}
        >
          <span
            className={`w-2 h-2 rounded-full
              ${value ? "bg-green-500" : "hidden"}`}
          />
        </span>
        <span className="text-green-600">Yes</span>
      </label>

      {/* NO */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name={label}
          checked={value === false}
          onChange={() => onChange?.(false)}
          className="hidden peer/no"
        />
        <span
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
            ${value === false ? "border-red-500" : "border-gray-400"}`}
        >
          <span
            className={`w-2 h-2 rounded-full
              ${value === false ? "bg-red-500" : "hidden"}`}
          />
        </span>
        <span className="text-red-600">No</span>
      </label>
    </div>
  </div>
);

export default Toggle;
