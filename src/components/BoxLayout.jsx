import React from "react";

const BoxLayout = ({ title, children }) => {
  return (
    <section className="box">
      {title && <h3 className="box-title">{title}</h3>}
      <div className="box-content">{children}</div>
    </section>
  );
};

export default BoxLayout;
