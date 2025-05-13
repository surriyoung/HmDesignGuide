function InputBox({ type, name, placeholder, value, onChange }) {
  const props = {};
  if (value !== undefined) props.value = value;
  if (onChange !== undefined) props.onChange = onChange;

  return (
    <input
      className="input-style"
      type={type}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default InputBox;
