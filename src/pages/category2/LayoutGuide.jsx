const LayoutGuide = () => {
  return (
    <div style={{ display: "flex", padding: "2rem", gap: "1rem" }}>
      <aside style={{ width: "25%", background: "#f2f2f2", padding: "1rem" }}>
        사이드바
      </aside>
      <main style={{ flex: 1, background: "#e0e0e0", padding: "1rem" }}>
        본문
      </main>
    </div>
  );
};

export default LayoutGuide;
