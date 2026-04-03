import { useDraftForm } from "../../../../shared/hooks/UseDraftForm";
import { z } from "zod";

export const authFormSchema = z.object({
  name: z.string().min(3, "El nombre es requerido"),
  lastName: z.string().min(3, "El apellido es requerido"),
  identity_document: z
    .string()
    .min(5, "Documento inválido"),
  email: z
    .string()
    .email("Correo electrónico inválido"),
  password: z
    .string()
    .min(6, "Mínimo 6 caracteres"),
});


export type AuthFormValues = z.infer<typeof authFormSchema>;


export const useRegisterForm = () => {

    const {handleSubmit,control,formState:{errors},register} = useDraftForm<AuthFormValues>({schema:authFormSchema});

    return{
        errors,
        handleSubmit,
        control,
        register
    };
}