type SelectProps = {
  label: string;
  required?: boolean;
  options?: { label: string; value: string | number }[];
};

const Select = ({ label, required = false, options = [] }: SelectProps) => (
  <div>
    <label className="text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <select className="w-full border rounded-md px-3 py-2 mt-1 bg-bb-bg">
      <option value="">{`Select ${label}`}</option>

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
