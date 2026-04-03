import { useNavigate } from "react-router";
import { Button } from "../../../../../ui/atoms/Button";
import { FormField } from "../../../../../ui/molecules/FormField";
import { useAuthForm } from "../../hooks/useLoginForm";




export const AuthFormLogin = () => {

    const { register, formState: { errors }, handleSubmit } = useAuthForm();

    const router = useNavigate();

    const onSubmit = () => {
        router('/products');
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_container">
                <h1 className="form_title">Log In</h1>
                <p className="form_subtitle">Completa tus datos para iniciar sesion</p>

                <div className="container_other_section">
                    <FormField
                        registration={register("email")}
                        error={errors.email}
                        placeholder="Nombre"
                        className="input_half"
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
                    ¿Olvidaste contraseña? <a className="form_link" href="#">Recuperar</a>
                </p>
            </div>
        </form>
    );
};