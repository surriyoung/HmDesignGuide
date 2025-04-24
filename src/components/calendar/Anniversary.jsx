import React, { useEffect, useState } from "react";
import axios from "axios";

const Anniversary = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const serviceKey =
        "18BfP0GwIoF62a76tctQLudqLieks5GpAR+1lQ8dJwUEmLQrWnw3I1MYGb3JkiO8BDNfNtC9tGC3piBKMtwmgg=="; // 디코딩된 상태로 넣어야 함
      const year = new Date().getFullYear();
      const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
      const url = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${serviceKey}&solYear=${year}&solMonth=${month}&_type=json`;
      const test = await axios.get(url);
      console.log(test.data)
      try {
        const responseData = await axios.get(url);
        const responseBody = responseData.data.response;
        console.log(responseBody)
        if (responseBody && responseBody.body && responseBody.body.items) {
          const items = responseBody.body.items.item || [];
          setHolidays(items);
        } else {
          console.error("공휴일 데이터가 없습니다.");
        }
      } catch (error) {
        console.error("공휴일 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div className="anniversary">
      <p>기념일을 출력하고싶어</p>
      <ul>
        {holidays.map((item, index) => (
          <li key={index}>
            {item.dateName} -{" "}
            {item.locdate
              .toString()
              .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Anniversary;
