import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import colors from "../config/colors";

function Select({ selectedValue, onValueChange, pickerItems, ...otherProps }) {
  return (
    <View style={styles.select}>
      <Picker
        mode="dropdown"
        onValueChange={onValueChange}
        selectedValue={selectedValue}
        style={styles.select}
        {...otherProps}
      >
        {pickerItems.map((item, i) => (
          <Picker.Item
            value={item.value}
            label={item.label}
            key={i}
            color={colors.light}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    borderBottomColor: colors.grey,
    borderWidth: 2,
    borderColor: "transparent",
  },
});

export default Select;
