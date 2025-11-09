import { COLORS } from "@/theme/color";
import { Pressable, StyleSheet, Text } from "react-native";

interface TextButtonProps {
  label: string;
  onPress: () => void;
}

const TextButton = ({ label, onPress }: TextButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.label]}>{label}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "normal",
    color: COLORS.accent,
    textAlign: "right",
  },
});
