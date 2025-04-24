import React from "react";
import UserInfo from "../components/UserInfo";
import Calendar from "../components/Calendar";

const HmDesignGuide = ({ user }) => {
  return (
    <div className="main-tile-wrap">
      <UserInfo user={user} />
      <Calendar />
    </div>
  );
};

export default HmDesignGuide;
