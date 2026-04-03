import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../../ui/atoms/Input";
import { ErrorMessage } from "../../../../../ui/atoms/ErrorMessage";

export interface InputAuthSection {
  name: string;
  placeholder?: string;
  class: string;
}

interface AuthFormSectionProps<T extends FieldValues> {
  inputs: InputAuthSection[];
  classContainer: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export const AuthFormSection = <T extends FieldValues>({
  inputs,
  classContainer,
  register,
  errors,
}: AuthFormSectionProps<T>) => {
  return (
    <div className={classContainer}>
      {inputs.map((item) => {
        const { class: className, name, ...rest } = item;
        const fieldName = name as Path<T>;
        const fieldError = errors[fieldName];

        return (
          <div key={name} className="input_wrapper">
            <Input
              className={`input ${className}`}
              {...register(fieldName)}
              {...rest}
            />
            <ErrorMessage message={fieldError?.message as string | undefined} />
          </div>
        );
      })}
    </div>
  );
};
