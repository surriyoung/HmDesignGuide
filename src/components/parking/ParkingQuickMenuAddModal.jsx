import { useState } from "react";
import BoxLayout from "../../components/BoxLayout";
import FormLayout from "../FormLayout";
import Button from "../Button";
import InputBox from "../form/InputBox";

function ParkingQuickMenuAddModal({ onClose, onComplete }) {
  const [menuName, setMenuName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!menuName) return alert("메뉴 명을 입력해주세요");
    onComplete({ menuName, image });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <BoxLayout
          title="메뉴 추가하기"
          modal={true}
          doneClick={handleSubmit}
          cancelClick={onClose}
        >
          <div className="modal-box">
            <InputBox
              type="input"
              name="메뉴 명"
              placeholder="메뉴 명을 입력해주세요"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
            />
            <div className="file-item">
              <span>{image ? image.name : "파일을 첨부해주세요"}</span>
            </div>
            <label className="basic-btn">
              파일 추가
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </BoxLayout>
      </div>
    </div>
  );
}

export default ParkingQuickMenuAddModal;
