const GridGuide = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>그리드 가이드</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        <div style={{ background: "#eee", padding: "1rem" }}>1</div>
        <div style={{ background: "#ccc", padding: "1rem" }}>2</div>
        <div style={{ background: "#aaa", padding: "1rem" }}>3</div>
      </div>
    </div>
  );
};

export default GridGuide;
