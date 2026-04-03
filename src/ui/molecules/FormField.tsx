import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../atoms/Input";
import { ErrorMessage } from "../atoms/ErrorMessage";

interface AuthFormSectionProps {
  registration: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
  type?: string;
  className?: string;
}

export const FormField = ({
  registration,
  error,
  placeholder,
  type = "text",
  className = "",
}: AuthFormSectionProps) => {

  return (
    <div className="input_wrapper">
      <Input
        className={`input ${className}`}
        placeholder={placeholder}
        type={type}
        {...registration}
      />
      <ErrorMessage message={error?.message} />
    </div>
  );
};
