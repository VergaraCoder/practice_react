import { useForm, type DefaultValues, type FieldValues, type UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodTypeAny } from "zod/v3";

type UseDraftFormProps<T extends FieldValues> = {
  defaultValues?: DefaultValues<T>;
  schema: ZodTypeAny;
  formOptions?: Omit<UseFormProps<T>, "defaultValues">;
};

export function useDraftForm<T extends FieldValues>({
  defaultValues,
  schema,
  formOptions,
}: UseDraftFormProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
    ...formOptions,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = methods;

  return {
    ...methods,
    submit: handleSubmit,
    resetForm: () => reset(defaultValues),
    isSubmitting,
    isValid,
    errors,
  };
}
