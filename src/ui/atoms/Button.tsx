type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  classStyle?:string
  onClick?: () => void;
};

export const Button = ({ children, classStyle , variant = "primary", onClick,  }: ButtonProps) => {
  return (
    <button className={`btn ${variant} ${classStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};