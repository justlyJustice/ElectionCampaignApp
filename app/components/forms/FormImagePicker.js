import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AspirantImageInput from "../AspirantImageInput";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
  };

  return (
    <>
      <AspirantImageInput imageUri={imageUri} onChangeImage={handleAdd} />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
