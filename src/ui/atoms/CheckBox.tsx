type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};