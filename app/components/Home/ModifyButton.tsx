import { COLORS } from "@/theme/color";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const ModifyButton = () => {
  const [isModifying, setIsModifying] = useState<boolean>(false);

  const handleClick = () => {
    setIsModifying((prev) => !prev);
  };

  const buttonLabel = isModifying ? "OK" : "Modify";

  return (
    <Pressable onPress={handleClick}>
      <Text style={[styles.label]}>{buttonLabel}</Text>
    </Pressable>
  );
};

export default ModifyButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "normal",
    color: COLORS.accent,
    textAlign: "right",
  },
  pressed: {
    color: COLORS.border,
  },
});
