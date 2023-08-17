import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Select from "../Select";

function FormSelect({ name, pickerItems }) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  return (
    <>
      <Select
        onBlur={() => setFieldTouched(name)}
        onValueChange={(value) => setFieldValue(name, value)}
        selectedValue={values[name]}
        pickerItems={pickerItems}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormSelect;
