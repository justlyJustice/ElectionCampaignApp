import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ style, textColor, title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      onPress={handleSubmit}
      style={style}
      textColor={textColor}
    />
  );
}

export default SubmitButton;
