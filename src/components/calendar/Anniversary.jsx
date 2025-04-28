import React, { useEffect, useState } from "react";
import axios from "axios";

const Anniversary = () => {
  const [holidays, setHolidays] = useState([]);
  const [todayHoliday, setTodayHoliday] = useState(null);
  const [nextHoliday, setNextHoliday] = useState(null); // 가장 근접한 기념일을 위한 state 추가

  useEffect(() => {
    const fetchAll = async () => {
      const serviceKey =
        "18BfP0GwIoF62a76tctQLudqLieks5GpAR%2B1lQ8dJwUEmLQrWnw3I1MYGb3JkiO8BDNfNtC9tGC3piBKMtwmgg%3D%3D";
      const today = new Date();
      const year = today.getFullYear();
      const monthNum = today.getMonth() + 1;
      const monthStr = monthNum.toString().padStart(2, "0");

      const baseUrl =
        "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService";

      const urls = {
        rest: `${baseUrl}/getRestDeInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=50&solYear=${year}&_type=json`,
        anniversary: `${baseUrl}/getAnniversaryInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=50&solYear=${year}&_type=json`,
        national: `${baseUrl}/getHoliDeInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=50&solYear=${year}&_type=json`,
      };

      try {
        const [restRes, anniversaryRes, nationalRes] = await Promise.all([
          axios.get(urls.rest),
          axios.get(urls.anniversary),
          axios.get(urls.national),
        ]);

        const parseItems = (res) => res.data.response.body.items?.item || [];

        const allDays = [
          ...parseItems(restRes),
          ...parseItems(anniversaryRes),
          ...parseItems(nationalRes),
        ];

        // 날짜 기준 정렬
        const sortedDays = allDays.sort((a, b) => a.locdate - b.locdate);

        const todayNum = parseInt(
          today.toISOString().slice(0, 10).replace(/-/g, "")
        );

        const beforeToday = sortedDays
          .filter((item) => item.locdate < todayNum)
          .slice(-2);
        const afterToday = sortedDays
          .filter((item) => item.locdate >= todayNum)
          .slice(0, 3);

        const allHolidays = [...beforeToday, ...afterToday];
        setHolidays(allHolidays);

        // 오늘 기념일 확인
        const todayHoliday = allHolidays.find(
          (item) => item.locdate === todayNum
        );
        setTodayHoliday(todayHoliday);

        // upcoming 기념일 중 가장 근접한 기념일 찾기
        const upcomingHolidays = allHolidays.filter(
          (item) => item.locdate >= todayNum
        );
        if (upcomingHolidays.length > 0) {
          setNextHoliday(upcomingHolidays[0]);
        }
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다.", error.message);
      }
    };

    fetchAll();
  }, []);

  return (
    <ul className="anniversary">
      {holidays.map((item, index) => (
        <li
          key={index}
          className={`${
            (todayHoliday && item.locdate >= todayHoliday.locdate) ||
            item.locdate >
              new Date().toISOString().slice(0, 10).replace(/-/g, "")
              ? "upcoming"
              : ""
          } ${
            nextHoliday && item.locdate === nextHoliday.locdate ? "next" : ""
          }`}
        >
          <span className="dot"></span>
          <time>
            {item.locdate.toString().slice(4, 6) +
              "." +
              item.locdate.toString().slice(6, 8)}
          </time>
          <span>{item.dateName}</span>
        </li>
      ))}
    </ul>
  );
};

export default Anniversary;
