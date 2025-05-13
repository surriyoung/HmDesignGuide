import React, { useState } from "react";
import InputBox from "./form/InputBox";
import SelectBox from "./form/SelectBox";
import RadioBox from "./form/RadioBox";
import ToggleSwitch from "./ToggleSwitch";
import CustomCheckButton from "./form/CustomCheckButton";
import Button from "./Button";

const FormLayout = ({
  title,
  type,
  options,
  multiple,
  checked,
  setChecked,
  onChange,
}) => {
  const [toggleChecked, setToggleChecked] = useState(false); // ✅ toggle 상태
  const [uploadedFiles, setUploadedFiles] = useState([]); // ✅ 파일 업로드 상태

  const hasFinalConsonant = (str) => {
    const lastChar = str[str.length - 1];
    const code = lastChar.charCodeAt(0);
    return (code - 0xac00) % 28 !== 0;
  };

  const suffix = hasFinalConsonant(title) ? "을" : "를";

  // 체크박스 상태 변경
  const handleCheck = (value) => {
    if (!setChecked) return; // 체크박스 아닌 경우 패스
    if (multiple) {
      const newChecked = new Set(checked);
      if (newChecked.has(value)) {
        newChecked.delete(value);
      } else {
        newChecked.add(value);
      }
      setChecked(newChecked);
    } else {
      setChecked(new Set([value]));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = [...uploadedFiles, ...files];
    if (newFiles.length > 5) {
      alert("파일은 최대 5개까지만 업로드할 수 있습니다.");
      setUploadedFiles(newFiles.slice(0, 5)); // 5개까지만 유지
    } else {
      setUploadedFiles(newFiles);
    }
    e.target.value = null; // 같은 파일 다시 업로드할 수 있도록 초기화
  };

  const handleFileDelete = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div className={`form-list ${type}`}>
      {title && type !== "toggle" && type !== "check" && (
        <div className="form-title-wrap">
          {type !== "file" && <h3>{title}</h3>}
          {type == "file" && (
            <>
              <div>
                <h3>{title}</h3>
                <span>*파일은 최대 5개까지 첨부 가능합니다.</span>
              </div>
              <label className="basic-btn">
                추가
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  style={{ display: "none" }}
                  disabled={uploadedFiles.length >= 5}
                />
              </label>
            </>
          )}
        </div>
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
        <>
          {options.map((option) => (
            <CustomCheckButton
              key={option.value}
              label={option.label}
              checked={checked.has(option.value)}
              onChange={() => handleCheck(option.value)}
            />
          ))}
        </>
      ) : type === "textarea" ? (
        <textarea
          name={title}
          placeholder={`${title}${suffix} 입력해주세요`}
          className="textarea-style"
        />
      ) : type === "file" ? (
        <>
          <ul className="file-list">
            <div className="form-title-wrap">
              <h3>업로드 파일</h3>
            </div>
            {uploadedFiles.map((file, index) => (
              <li key={index} className="file-item">
                <span>{file.name}</span>
                <Button
                  type="danger"
                  onClick={() => handleFileDelete(index)}
                  name="삭제"
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <InputBox
          type={type}
          name={title}
          placeholder={`${title}${suffix} 입력해주세요`}
          {...(onChange ? { onChange } : {})}
        />
      )}
    </div>
  );
};

export default FormLayout;
