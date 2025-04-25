import React from "react";
import UserInfo from "../components/mainTile/UserInfo";
import Calendar from "../components/mainTile/Calendar";
import MenuSearchBox from "../components/mainTile/MenuSearchBox";
import MainTileWrap from "../components/MainTileWrap";

const Home = ({ user }) => {
  return (
    <div className="main-tile-wrapper">
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
  );
};

export default Home;
