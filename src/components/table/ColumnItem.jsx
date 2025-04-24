import ColumnTh from "./ColumnTh";
import ColumnTd from "./ColumnTd";

const ColumnItem = ({ headers, items }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <ColumnTh key={index}>{header}</ColumnTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((headerKey, colIndex) => (
              <ColumnTd key={colIndex}>
                {headerKey === "이미지" ? (
                  item[headerKey] ? (
                    <img src={item[headerKey]} alt="이미지" width="80" />
                  ) : (
                    "이미지 없음"
                  )
                ) : (
                  item[headerKey]
                )}
              </ColumnTd>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColumnItem;
