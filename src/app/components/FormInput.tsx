import { ChangeEvent } from "react";

interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "email" | "select" | "textarea";
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: Array<{ value: string; label: string }>;
}

export default function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
  options = [],
}: FormInputProps) {
  const baseInputClass =
    "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400";

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            required={required}
            rows={rows}
            value={value}
            onChange={onChange}
            className={`${baseInputClass} resize-none`}
            placeholder={placeholder}
          />
        );
      case "select":
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={baseInputClass}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className={baseInputClass}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && "*"}
      </label>
      {renderInput()}
    </div>
  );
}
