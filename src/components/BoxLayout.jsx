import React, { useState } from "react";
import ContentTitle from "./ContentTitle";

const BoxLayout = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleBox = () => setIsOpen((prev) => !prev);

  // children을 배열로 변환
  const childArray = React.Children.toArray(children);

  // 버튼과 콘텐츠 구분
  const hasToggleButton = childArray.length > 1;
  const buttonChild = hasToggleButton ? childArray[0] : null;
  const contentChild = hasToggleButton ? childArray[1] : childArray[0];

  return (
    <section className="box">
      {title && (
        <ContentTitle title={title} name={"box-title"}>
          {buttonChild && buttonChild}
        </ContentTitle>
      )}
      <div className={`box-content ${isOpen ? "open" : "closed"}`}>
        {contentChild}
      </div>
    </section>
  );
};

export default BoxLayout;
