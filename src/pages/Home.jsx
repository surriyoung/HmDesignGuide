import React, { useState, useEffect } from "react";
import UserInfo from "../components/mainTile/UserInfo";
import Calendar from "../components/mainTile/Calendar";
import MenuSearchBox from "../components/mainTile/MenuSearchBox";
import MainTileWrap from "../components/MainTileWrap";
import ProgressStatus from "../components/ProgressStatus";
import FavoriteList from "../components/mainTile/FavoriteList";

const Home = ({ user }) => {
  const [favoriteTabs, setFavoriteTabs] = useState([]);

  // 로컬스토리지에서 즐겨찾기 목록 불러오기
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteTabs");
    if (savedFavorites) {
      setFavoriteTabs(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="main-wrap home-wrap">
      <div className="main-content">
        <div className="main-tile-wrapper left">
          <h4>진행과정</h4>
          <div className="main-tile-wrapper mini-tile-wrapper">
            <MainTileWrap>
              <ProgressStatus />
            </MainTileWrap>
            <MainTileWrap>
              <ProgressStatus />
            </MainTileWrap>
            <MainTileWrap>
              <ProgressStatus />
            </MainTileWrap>
          </div>
        </div>
        <div className="main-tile-wrapper right">
          <MainTileWrap title="즐겨찾기">
            <FavoriteList favoriteTabs={favoriteTabs} />
          </MainTileWrap>
          <div className="main-tile-wrapper mini-tile-wrapper">
            <MainTileWrap title="내 정보">
              <UserInfo user={user} />
            </MainTileWrap>
            <MainTileWrap title="캘린더">
              <Calendar />
            </MainTileWrap>
            <MainTileWrap title="메뉴 검색">
              <MenuSearchBox />
            </MainTileWrap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
