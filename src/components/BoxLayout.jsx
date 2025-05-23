import React, { useState } from "react";
import ContentTitle from "./ContentTitle";
import Button from "./Button";
import ArrowIcon from "../assets/icons/ArrowIcon";

const BoxLayout = ({
  title,
  toggle = false,
  modal = false,
  children,
  onReset = () => {},
  doneClick = () => {},
  cancelClick = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <section
      className={`box ${toggle ? "toggle-box" : ""} ${
        isOpen ? "open" : "closed"
      }`}
    >
      {title && (
        <ContentTitle title={title} name={"box-title"}>
          {toggle && (
            <div className="btn-list">
              <Button name="선택해제" onClick={onReset} />
              <Button type="icon" onClick={toggleOpen}>
                <ArrowIcon />
              </Button>
            </div>
          )}
          {modal && (
            <div className="btn-list">
              <Button name="완료" type="primary" onClick={doneClick} />
              <Button name="취소" onClick={cancelClick} />
            </div>
          )}
        </ContentTitle>
      )}
      <div className="box-content">{children}</div>
    </section>
  );
};

export default BoxLayout;
