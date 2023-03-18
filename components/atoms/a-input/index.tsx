import React from "react";

// name: Path<T>;
export interface InputProp<T> {
  id?: string;
  type: string;
  name: string;
  placeholder?: string;
  className: string;
  value?: string;
  required?: boolean;
  error?: string;
  accept?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Input<T>({
  id,
  type,
  name,
  placeholder,
  className,
  required,
  value,
  error,
  min,
  max,
  accept,
  maxLength,
  disabled,
  handleChange,
  handleFocus,
}: InputProp<T>) {
  return (
    <>
      <input
        id={id}
        min={min}
        max={max}
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        required={required}
        value={value}
        autoComplete="on"
        maxLength={maxLength}
        onChange={(e) => handleChange && handleChange(e)}
        onFocus={(e) => handleFocus && handleFocus(e)}
        disabled={disabled}
        accept={accept}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  );
}

export default Input;
