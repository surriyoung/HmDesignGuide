const FormGuide = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>폼 가이드</h1>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label>이름</label>
          <input
            type="text"
            style={{ display: "block", padding: "0.5rem", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>이메일</label>
          <input
            type="email"
            style={{ display: "block", padding: "0.5rem", width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "#007BFF",
            color: "#fff",
            border: "none",
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default FormGuide;
