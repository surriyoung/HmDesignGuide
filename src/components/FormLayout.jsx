import React, { useState } from "react";
import InputBox from "./form/InputBox";
import SelectBox from "./form/SelectBox";
import RadioBox from "./form/RadioBox";
import ToggleSwitch from "./ToggleSwitch";
import CustomCheckButton from "./form/CustomCheckButton";

const FormLayout = ({ title, type, options, multiple }) => {
  const [checked, setChecked] = useState(new Set()); // Set을 사용하여 중복 체크 방지

  const hasFinalConsonant = (str) => {
    const lastChar = str[str.length - 1];
    const code = lastChar.charCodeAt(0);
    return (code - 0xac00) % 28 !== 0;
  };

  const suffix = hasFinalConsonant(title) ? "을" : "를";

  const [toggleChecked, setToggleChecked] = useState(false); // ✅ toggle 상태

  // 체크박스 상태 변경
  const handleCheck = (value) => {
    if (multiple) {
      // 다중 체크 가능일 때
      const newChecked = new Set(checked);
      if (newChecked.has(value)) {
        newChecked.delete(value); // 이미 선택된 항목은 삭제
      } else {
        newChecked.add(value); // 선택되지 않은 항목은 추가
      }
      setChecked(newChecked);
    } else {
      // 다중 체크 불가능일 때 (하나만 선택)
      setChecked(new Set([value])); // 선택된 값만 저장
    }
  };

  return (
    <div className={`form-list ${type}`}>
      {title && type !== "toggle" && type !== "check" && (
        <h3 className="box-content-title">{title}</h3>
      )}
      {type === "select" ? (
        <SelectBox options={options} />
      ) : type === "radio" ? (
        <RadioBox name={title} options={options} />
      ) : type === "toggle" ? (
        <ToggleSwitch
          name={title}
          checked={toggleChecked}
          onChange={setToggleChecked}
          label={title}
        />
      ) : type === "check" ? (
        // 체크박스 목록 반복 출력
        options.map((option) => (
          <CustomCheckButton
            key={option.value}
            label={option.label}
            checked={checked.has(option.value)}
            onChange={() => handleCheck(option.value)}
          />
        ))
      ) : (
        <InputBox
          type={type}
          name={title}
          placeholder={`${title}${suffix} 입력해주세요`}
        />
      )}
    </div>
  );
};

export default FormLayout;
