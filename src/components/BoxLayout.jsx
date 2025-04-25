import React from "react";
import ContentTitle from "./ContentTitle";

const BoxLayout = ({ title, children }) => {
  return (
    <section className="box">
      {title && <ContentTitle title={title} name={"box-title"} />}
      <div className="box-content">{children}</div>
    </section>
  );
};

export default BoxLayout;
