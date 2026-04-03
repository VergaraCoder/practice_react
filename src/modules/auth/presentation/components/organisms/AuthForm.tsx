import { AuthFormSection, type InputAuthSection } from "../molecules/AuthFormSection";

interface AuthTemplateProps{};

export const FirstSection:InputAuthSection[] = [
    {
        name :"name",
        placeholder :"Nombre",
        class:""
    },
    {
        name :"lastName",
        placeholder:"Apellido",
        class:""

    },
    {
        name :"identity_document",
        placeholder:"Documento de identidad",
        class:""

    }
];

export const SecondSection:InputAuthSection[] = [
    {
        name :"identity_document",
        placeholder:"Documento de identidad",
        class:""
    },
    {
        name :"email",
        placeholder:"Correo electronico",
        class:""
    },
    {
        name :"password",
        placeholder:"Contraseña",
        class:""
    },

];

export const AuthForm = ({}:AuthTemplateProps) => {


    return (

        <div>
            <AuthFormSection
              inputs={FirstSection}
              classContainer="containerFirstSection"
            />

            <AuthFormSection
              inputs={SecondSection}
              classContainer=""
            />
        </div>
    );
}