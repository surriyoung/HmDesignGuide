import BoxLayout from "../../components/BoxLayout";
import Button from "../../components/Button";
import FormLayout from "../../components/FormLayout";
import ContentTitle from "../../components/ContentTitle";
import { FormProvider, useFormContext } from "../../context/FormContext"; // ✨ 추가

const FormGuideContent = () => {
  const parkingTypeOptions = [
    { value: "Select1", label: "Select1" },
    { value: "Select2", label: "Select2" },
    { value: "Select3", label: "Select3" },
  ];

  const genderOptions = [
    { value: "all", label: "전체" },
    { value: "in", label: "입차" },
    { value: "out", label: "출차" },
  ];

  const checkOptions = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
    { value: "option6", label: "옵션 6" },
    { value: "option7", label: "옵션 7" },
    { value: "option8", label: "옵션 8" },
    { value: "option9", label: "옵션 9" },
    { value: "option10", label: "옵션 10" },
    { value: "option11", label: "옵션 11" },
    { value: "option12", label: "옵션 12" },
    { value: "option13", label: "옵션 13" },
    { value: "option14", label: "옵션 14" },
    { value: "option15", label: "옵션 15" },
    { value: "option16", label: "옵션 16" },
    { value: "option17", label: "옵션 17" },
    { value: "option18", label: "옵션 18" },
    { value: "option19", label: "옵션 19" },
    { value: "option20", label: "옵션 20" },
  ];

  const {
    multiChecked,
    setMultiChecked,
    resetMultiChecked,
    singleChecked,
    setSingleChecked,
    resetSingleChecked,
  } = useFormContext(); // ✨ 추가

  const handleSave = (e) => {
    e.preventDefault();
    console.log("폼이 제출되었습니다!");
  };

  return (
    <>
      <ContentTitle title={"Form Guide"}>
        <div className="btn-list">
          <Button type="primary" name="저장" onClick={handleSave} />
        </div>
      </ContentTitle>
      <BoxLayout title="폼 가이드">
        <form className="form">
          <FormLayout title="Input Box" type="input" />
          <FormLayout
            title="Select Box"
            type="select"
            options={parkingTypeOptions}
          />
          <FormLayout
            title="RadioButton"
            type="radio"
            options={genderOptions}
          />
          <FormLayout title="내용" type="textarea" />
          <FormLayout title="파일 업로드" type="file" />
          <FormLayout title="토글" type="toggle" />
          <BoxLayout
            title="다중선택 체크박스"
            toggle={true}
            onReset={resetMultiChecked}
          >
            <FormLayout
              title="다중선택"
              type="check"
              options={checkOptions}
              multiple={true}
              checked={multiChecked}
              setChecked={setMultiChecked}
            />
          </BoxLayout>
          <BoxLayout
            title="단일선택 체크박스"
            toggle={true}
            onReset={resetSingleChecked}
          >
            <FormLayout
              title="단일선택"
              type="check"
              options={checkOptions}
              multiple={false}
              checked={singleChecked}
              setChecked={setSingleChecked}
            />
          </BoxLayout>
        </form>
      </BoxLayout>
    </>
  );
};

// FormProvider로 감싸서 제공
const FormGuide = () => {
  return (
    <div className="main-wrap">
      <div className="main-content">
        <FormProvider>
          <FormGuideContent />
        </FormProvider>
      </div>
    </div>
  );
};

export default FormGuide;
