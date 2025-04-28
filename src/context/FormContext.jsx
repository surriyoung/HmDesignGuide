import { createContext, useContext, useState } from "react";

const FormContext = createContext();

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

export const useFormContext = () => useContext(FormContext);
