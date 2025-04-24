function Button({ type, name }) {
  return <button className={`basic-btn ${type}`}>{name}</button>;
}

export default Button;
