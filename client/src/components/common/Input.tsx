interface InputProps {
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  readonly?: boolean;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
}

export const Input: React.FC<InputProps> = ({
  inputRef,
  onChange,
  value,
  placeholder,
  readonly,
  onClick,
}) => {
  return (
    <input
      className="my-2 h-10 w-full rounded-md border border-gray-300 bg-gray-100 p-2 dark:border-0 dark:bg-darkBlue-700 dark:placeholder:text-gray-700"
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChange}
      value={value}
      readOnly={readonly}
      onClick={onClick}
    />
  );
};
