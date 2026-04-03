import { Button } from "../../../../../ui/atoms/Button";
import { useRegisterForm, type AuthFormValues } from "../../hooks/useRegisterForm";
import { AuthFormSection } from "../molecules/AuthFormSection";

export const AuthSections = {
    firstSection: [
        { name: "name", placeholder: "Nombre", class: "input_half" },
        { name: "lastName", placeholder: "Apellido", class: "input_half" },
    ],
    secondSection: [
        { name: "identity_document", placeholder: "Documento de identidad", class: "input_full" },
        { name: "email", placeholder: "Correo electrónico", class: "input_full" },
        { name: "password", placeholder: "Contraseña", class: "input_full input_password" },
    ],
};

export const AuthForm = () => {

    const { control, errors, handleSubmit ,register } = useRegisterForm();

    return (
        <div className="form_container">
            <h1 className="form_title">Crear cuenta</h1>
            <p className="form_subtitle">Completa tus datos para registrarte</p>

            <AuthFormSection<AuthFormValues>
                inputs={AuthSections.firstSection}
                register={register}
                errors={errors}
                classContainer="container_first_section"
            />
            <AuthFormSection<AuthFormValues>
                inputs={AuthSections.secondSection}
                register={register}
                errors={errors}
                classContainer="container_other_section"
            />

            <Button classStyle="form_submit">Registrarse</Button>

            <p className="form_footer">
                ¿Ya tienes una cuenta? <a className="form_link" href="#">Iniciar sesión</a>
            </p>
        </div>
    );
};
