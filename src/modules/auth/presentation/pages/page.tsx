import { AuthForm } from "../components/organisms/AuthForm";
import { AuthTemplate } from "../components/templates/AuthTemplate";



export const AuthPage = () => {

    return(
        <>
            <AuthTemplate>
                <AuthForm/>
            </AuthTemplate>
        </>
    );
};