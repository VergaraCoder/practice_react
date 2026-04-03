import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input ref={ref} {...props} />;
});