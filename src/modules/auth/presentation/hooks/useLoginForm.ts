import { useDraftForm } from "../../../../shared/hooks/UseDraftForm";
import { z } from "zod";

export const authFormSchema = z.object({
  email: z
    .string()
    .email("Correo electrónico inválido"),
  password: z
    .string()
    .min(6, "Mínimo 6 caracteres"),
});


export type AuthFormValues = z.infer<typeof authFormSchema>;


export const useAuthForm = () => {

    const form = useDraftForm<AuthFormValues>({schema:authFormSchema});

    return form;
}