function ContentTitle({ title, children }) {
  return (
    <div className="content-title-wrap">
      <h2 className="content-title">{title}</h2>
      {children}
    </div>
  );
}

export default ContentTitle;
