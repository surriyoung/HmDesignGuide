import React, { useEffect, useState } from "react";
import axios from "axios";

const Anniversary = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const serviceKey =
        "18BfP0GwIoF62a76tctQLudqLieks5GpAR%2B1lQ8dJwUEmLQrWnw3I1MYGb3JkiO8BDNfNtC9tGC3piBKMtwmgg%3D%3D";
      const year = new Date().getFullYear();
      const month = (new Date().getMonth() + 1).toString().padStart(2, "0");

      const baseUrl =
        "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService";

      const urls = {
        rest: `${baseUrl}/getRestDeInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=5&solYear=${year}&solMonth=${month}&_type=json`,
        anniversary: `${baseUrl}/getAnniversaryInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=5&solYear=${year}&solMonth=${month}&_type=json`,
        national: `${baseUrl}/getHoliDeInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=5&solYear=${year}&solMonth=${month}&_type=json`,
      };

      try {
        const [restRes, anniversaryRes, nationalRes] = await Promise.all([
          axios.get(urls.rest),
          axios.get(urls.anniversary),
          axios.get(urls.national),
        ]);

        const parseItems = (res) => res.data.response.body.items?.item || [];

        const restDays = parseItems(restRes);
        const anniversaries = parseItems(anniversaryRes);
        const nationalDays = parseItems(nationalRes);

        const allDays = [...restDays, ...anniversaries, ...nationalDays];

        setHolidays(allDays);
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다.", error.message);
      }
    };

    fetchAll();
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
