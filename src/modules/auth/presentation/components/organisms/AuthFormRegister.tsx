import { useNavigate } from "react-router";
import { Button } from "../../../../../ui/atoms/Button";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import { FormField } from "../../../../../ui/molecules/FormField";
import { AUTH_ROUTES } from "../../../paths";

export const AuthFormRegister = () => {
  const { register, formState: { errors }, handleSubmit } = useRegisterForm();

  const router = useNavigate();

  const onSubmit = () => {
    router(AUTH_ROUTES.LOGIN);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_container">
        <h1 className="form_title">Crear cuenta</h1>
        <p className="form_subtitle">Completa tus datos para registrarte</p>

        <div className="container_first_section">
          <FormField
            registration={register("name")}
            error={errors.name}
            placeholder="Nombre"
            className="input_half"
          />
          <FormField
            registration={register("lastName")}
            error={errors.lastName}
            placeholder="Apellido"
            className="input_half"
          />
        </div>

        <div className="container_other_section">
          <FormField
            registration={register("identity_document")}
            error={errors.identity_document}
            placeholder="Documento de identidad"
          />
          <FormField
            registration={register("email")}
            error={errors.email}
            placeholder="Correo electrónico"
            type="email"
          />
          <FormField
            registration={register("password")}
            error={errors.password}
            placeholder="Contraseña"
            type="password"
          />
        </div>

        <Button classStyle="form_submit">Registrarse</Button>

        <p className="form_footer">
          ¿Ya tienes una cuenta? <a className="form_link" href="#">Iniciar sesión</a>
        </p>
      </div>
    </form>
  );
};
