function MainTileWrap({ title, children }) {
  return (
    <div className="main-tile-wrap">
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}
export default MainTileWrap;
