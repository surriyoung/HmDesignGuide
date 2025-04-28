import { createContext, useContext, useState } from "react";

// 1. Context 생성
const FormContext = createContext();

// 2. Provider 컴포넌트
export const FormProvider = ({ children }) => {
  const [multiChecked, setMultiChecked] = useState(new Set());
  const [singleChecked, setSingleChecked] = useState(new Set());

  const resetMultiChecked = () => setMultiChecked(new Set());
  const resetSingleChecked = () => setSingleChecked(new Set());

  return (
    <FormContext.Provider
      value={{
        multiChecked,
        setMultiChecked,
        resetMultiChecked,
        singleChecked,
        setSingleChecked,
        resetSingleChecked,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// 3. Context 쉽게 쓰게 하는 훅
export const useFormContext = () => useContext(FormContext);
