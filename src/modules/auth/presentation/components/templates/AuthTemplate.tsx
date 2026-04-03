import type { ReactNode } from "react"

interface AuthTemplateProps{
    children:ReactNode
}


export const AuthTemplate = ({children}:AuthTemplateProps) => {

    return (
        <div className="containerTemplate">
            {children}
        </div>
    );
}