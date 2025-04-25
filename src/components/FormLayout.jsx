import React from "react";
import InputBox from "./form/InputBox";
import SelectBox from "./form/SelectBox";

const FormLayout = ({ title, type, options }) => {
  const hasFinalConsonant = (str) => {
    const lastChar = str[str.length - 1];
    const code = lastChar.charCodeAt(0);
    return (code - 0xac00) % 28 !== 0;
  };

  const suffix = hasFinalConsonant(title) ? "을" : "를";

  return (
    <>
      {title && <h3 className="box-content-title">{title}</h3>}
      <form className="palette">
        {type === "select" ? (
          <SelectBox options={options} />
        ) : (
          <InputBox
            type={type}
            name={title}
            placeholder={`${title}${suffix} 입력해주세요`}
          />
        )}
      </form>
    </>
  );
};

export default FormLayout;
