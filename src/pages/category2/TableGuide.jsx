import ContentTitle from "../../components/ContentTitle";
import TableContainer from "../../components/TableContainer";
import ColumnItem from "../../components/table/ColumnItem";
import RowItem from "../../components/table/RowItem";

const TableGuide = () => {
  const headers = [
    "순번",
    "주차장",
    "이미지",
    "차량번호",
    "입차일시",
    "출차일시",
    "상태",
  ];

  const parkingData = Array.from({ length: 10 }, () => ({
    순번: 9,
    주차장: "신천둔지",
    이미지: "", // 또는 이미지 URL
    차량번호: "107저8405",
    입차일시: "2025-04-09 00:17:53",
    출차일시: "2025-04-09 01:41:17",
    상태: "정산",
  }));

  const infoList = [
    { label: "지자체 이름", value: "구미도시공사" },
    { label: "사업자 번호", value: "513-82-05827" },
    { label: "홈페이지 주소", value: "https://www.gmuc.or.kr/sisul/index.do" },
    { label: "지자체 연락처", value: "1551-9963" },
    { label: "지자체 주소", value: "경상북도 구미시 산책길 63 (원평동)" },
  ];

  return (
    <div className="main-wrap">
      <div className="main-content">
        <ContentTitle title="세로형 테이블" />
        <TableContainer>
          <ColumnItem headers={headers} items={parkingData} />
        </TableContainer>

        <ContentTitle title="가로형 테이블" />
        <TableContainer>
          {infoList.map((item, index) => (
            <RowItem key={index} label={item.label} value={item.value} />
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default TableGuide;
