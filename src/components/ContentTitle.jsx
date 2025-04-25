function ContentTitle({ title, name, children }) {
  return (
    <div className={`content-title-wrap ${name ? name : ""}`}>
      <h2 className="content-title">{title}</h2>
      {children}
    </div>
  );
}

export default ContentTitle;
