import React from "react";
import RowItem from "../../components/table/RowItem";
import ContentTitle from "../../components/ContentTitle";
import TableContainer from "../../components/TableContainer";

const FontGuide = () => {
  const fontSize = [
    { label: "타이틀1", value: "24px" },
    { label: "타이틀2", value: "20px" },
    { label: "타이틀3", value: "18px" },
    { label: "콘텐츠1", value: "16px" },
    { label: "콘텐츠2", value: "14px" },
  ];

  const fontWeight = [
    { label: "Bold(타이틀)", value: "700" },
    { label: "SemiBold(서브타이틀)", value: "600" },
    { label: "Medium(TH)", value: "500" },
    { label: "Regular(콘텐츠)", value: "400" },
  ];

  return (
    <div className="main-wrap">
      <div className="main-content">
        <ContentTitle title={"Font Family"} />
        <p>Pretendard</p>
        <ContentTitle title={"Font Size"} />
        <TableContainer>
          {fontSize.map((item, idx) => (
            <RowItem
              key={idx}
              label={item.label}
              value={item.value}
              type="size"
              showExample
            />
          ))}
        </TableContainer>
        <ContentTitle title={"Font Weight"} />
        <TableContainer>
          {fontWeight.map((item, idx) => (
            <RowItem
              key={idx}
              label={item.label}
              value={item.value}
              type="weight"
              showExample
            />
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default FontGuide;
