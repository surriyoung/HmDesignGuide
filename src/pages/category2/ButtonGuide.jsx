import React, { useState } from "react";
import ContentTitle from "../../components/ContentTitle";
import BoxLayout from "../../components/BoxLayout";
import PaletteSection from "../../components/PaletteSection";
import ToggleSwitch from "../../components/ToggleSwitch";
import Button from "../../components/Button";
import StateTag from "../../components/StateTag";

const ButtonGuide = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isModeToggled, setIsModeToggled] = useState(true);

  const handleToggleChange = () => {
    setIsToggled((prev) => !prev);
  };

  const handleModeToggleChange = () => {
    setIsModeToggled((prev) => !prev);
  };

  return (
    <div className="main-wrap">
      <div className="main-content">
        <ContentTitle title="UI 컴포넌트" />
        <BoxLayout title="버튼">
          <PaletteSection>
            <Button name="Primary" type="primary" />
            <Button name="Secondary" />
            <Button name="Danger" type="danger" />
          </PaletteSection>
        </BoxLayout>
        <BoxLayout title="상태 표시">
          <PaletteSection>
            <StateTag state="거절" type="dont" />
            <StateTag state="승인" type="doing" />
            <StateTag state="신청" type="done" />
          </PaletteSection>
        </BoxLayout>
        <BoxLayout title="토글 버튼">
          <PaletteSection>
            <ToggleSwitch
              label="기본토글"
              checked={isToggled}
              onChange={handleToggleChange}
            />
            <ToggleSwitch
              label="모드토글"
              checked={isModeToggled}
              onChange={handleModeToggleChange}
              isModeToggle={true} // 모드토글이므로 isModeToggle을 true로 설정
            />
          </PaletteSection>
        </BoxLayout>
      </div>
    </div>
  );
};

export default ButtonGuide;
