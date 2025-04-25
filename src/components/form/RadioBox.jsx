function RadioBox({ options = [], name }) {
  return (
    <div className="radio-wrap">
      {options.map((opt, index) => (
        <div
          key={index}
          className={`radio-style ${opt.checked ? "checked" : ""}`}
        >
          <label>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={opt.checked} // 상태를 명확히 지정
              onChange={() => {}} // 라디오 버튼이 선택되었을 때 상태 변경 처리
            />
            <span>{opt.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioBox;
