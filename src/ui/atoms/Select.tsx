type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  return (
    <select>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
};