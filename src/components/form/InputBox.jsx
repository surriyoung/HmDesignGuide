function InputBox({ type, name, placeholder }) {
  return (
    <input
      className="input-style"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
export default InputBox;
