import React from "react";
import UserInfo from "../components/UserInfo";
import Calendar from "../components/Calendar";
import MenuSearchBox from "../components/MenuSearchBox";

const Home = ({ user }) => {
  return (
    <div className="main-tile-wrap">
      <UserInfo user={user} />
      <Calendar />
      <MenuSearchBox />
    </div>
  );
};

export default Home;
