import React from "react";
import UserInfo from "../components/UserInfo";
import Calendar from "../components/Calendar";

const Home = ({ user }) => {
  return (
    <div className="main-tile-wrap">
      <UserInfo user={user} />
      <Calendar />
    </div>
  );
};

export default Home;
