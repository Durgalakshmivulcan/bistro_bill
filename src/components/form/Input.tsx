type InputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

const Input = ({
  label,
  required = false,
  placeholder,
  type = "text",
}: InputProps) => (
  <div>
    <label className="text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <input
      type={type}
      className="w-full border rounded-md px-3 py-2 mt-1 bg-bb-bg"
      placeholder={placeholder || `Enter ${label}`}
    />
  </div>
);

export default Input;
