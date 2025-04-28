import React, { useState } from "react";
import ContentTitle from "./ContentTitle";

const BoxLayout = ({ title, toggle = false, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  // children을 배열로 변환
  const childArray = React.Children.toArray(children);

  // 버튼과 콘텐츠 구분
  const hasToggleButton = childArray.length > 1;
  const buttonChild = hasToggleButton ? childArray[0] : null;
  const contentChild = hasToggleButton ? childArray[1] : childArray[0];

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // FormLayout의 handleClearSelection을 받아서 props로 전달
  const handleClearSelection = contentChild.props.handleClearSelection;

  return (
    <section className={`box ${toggle ? "toggle-box" : ""}`}>
      {title && (
        <ContentTitle title={title} name={"box-title"}>
          {buttonChild &&
            React.cloneElement(buttonChild, { onClick: toggleOpen })}
        </ContentTitle>
      )}
      <div className={`box-content ${isOpen ? "open" : "closed"}`}>
        {/* FormLayout에 handleClearSelection을 전달 */}
        {React.cloneElement(contentChild, { handleClearSelection })}
      </div>
    </section>
  );
};

export default BoxLayout;
