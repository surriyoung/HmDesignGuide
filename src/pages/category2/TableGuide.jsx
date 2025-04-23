const TableGuide = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>테이블 가이드</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>이름</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>디자이너</td>
          </tr>
          <tr>
            <td>김개발</td>
            <td>프론트엔드</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableGuide;
