import React from "react";
import { View } from "react-native";
import { useFormikContext, FieldArray } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";

function QuotesFieldArray({ name, width, ...otherProps }) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <>
      <FieldArray
        name={name}
        render={({ push, insert, remove }) => (
          <>
            {values[name] &&
              values[name].length > 0 &&
              values[name].map((value, index) => (
                <View key={index}>
                  <View>
                    <TextInput
                      name={`values.${index}`}
                      placeholder={`Enter your quote`}
                    />
                  </View>
                </View>
              ))}
          </>
        )}
      />
    </>
  );
}

export default QuotesFieldArray;
