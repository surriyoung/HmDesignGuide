import React, { useEffect, useState } from "react";

// 날짜 포맷 함수 (기존 코드 그대로)
const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth()는 0부터 시작
  const year = date.getFullYear().toString().slice(2); // 연도 끝 2자리만 가져오기

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

// GitHub API를 호출하여 커밋 내역을 불러오는 함수
const fetchCommitData = async (sinceDate) => {
  const response = await fetch(
    `https://api.github.com/repos/surriyoung/HmDesignGuide/commits?since=${sinceDate}`
  );
  const data = await response.json();

  // 데이터가 배열인지 확인하고 반환
  if (Array.isArray(data)) {
    return data;
  } else {
    return []; // 배열이 아닌 경우 빈 배열을 반환
  }
};

const ProgressStatus = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  // 현재 날짜를 'YYYY-MM-DD' 형식으로 포맷
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}T00:00:00Z`; // 'YYYY-MM-DDT00:00:00Z' 형태로 반환
  };

  useEffect(() => {
    const getCommitData = async () => {
      try {
        const commitData = await fetchCommitData(getTodayDate()); // 오늘 날짜를 기준으로 커밋 가져오기
        setCommits(commitData);
      } catch (error) {
        console.error("Error fetching commit data:", error);
      } finally {
        setLoading(false);
      }
    };

    getCommitData();

    // 하루마다 API 호출하기 (매일 00:00:00에 호출)
    const interval = setInterval(() => {
      getCommitData();
    }, 86400000); // 86400000ms = 24시간

    // 컴포넌트 언마운트 시 interval 제거
    return () => clearInterval(interval);
  }, []); // 빈 배열로 설정하여 첫 렌더링 때만 호출

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-tile progress-tile">
      <h3>진행 상황</h3>
      <div className="recent-searches result-wrap">
        <p>업데이트 횟수: {commits.length}</p>
        <ul>
          {commits.map((commit, index) => (
            <li key={index}>
              <p>{commit.commit.message}</p>
              <p>{formatDate(commit.commit.author.date)}</p>{" "}
              {/* 날짜 포맷 변경 */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressStatus;
