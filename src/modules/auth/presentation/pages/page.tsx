import { AuthFormRegister } from "../components/organisms/AuthFormRegister";
import { AuthTemplate } from "../components/templates/AuthTemplate";

export const AuthPage = () => {
  return (
    <AuthTemplate>
      <AuthFormRegister />
    </AuthTemplate>
  );
};
