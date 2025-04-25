import BoxLayout from "../../components/BoxLayout";
import FormLayout from "../../components/FormLayout";

const FormGuide = () => {
  const parkingTypeOptions = [
    { value: "underground", label: "지하" },
    { value: "ground", label: "지상" },
    { value: "mechanical", label: "기계식" },
  ];

  return (
    <BoxLayout title="폼 가이드">
      <FormLayout title="주차장 코드" type="input" />
      <FormLayout
        title="주차장 유형"
        type="select"
        options={parkingTypeOptions}
      />
    </BoxLayout>
  );
};

export default FormGuide;
