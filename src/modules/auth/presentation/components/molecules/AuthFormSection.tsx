import type { ReactNode } from "react";
import { Input } from "../../../../../ui/atoms/Input";


interface AuthFormSectionProps{
    children?:ReactNode;
    inputs:InputAuthSection[],
    classContainer:string
};


export interface InputAuthSection{
    register?:any;
    name?:string;
    placeholder?:string;
    value?:string;
    class:string
}

export const AuthFormSection = ({children,inputs,classContainer}:AuthFormSectionProps) =>{
    return(
        <div className={classContainer}>
            {/* {children} */}
            {inputs.length != 0 && inputs.map((item:InputAuthSection)=>(
                <Input
                  {...item}
                />
            ))}
        </div>
    );
}