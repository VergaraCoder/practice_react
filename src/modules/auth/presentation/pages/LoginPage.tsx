import { AuthFormLogin } from "../components/organisms/AuthFormLogin";
import { AuthTemplate } from "../components/templates/AuthTemplate";


export const LoginPage = () => {

    return (
        <AuthTemplate>
            <AuthFormLogin />
        </AuthTemplate>
    );
};
