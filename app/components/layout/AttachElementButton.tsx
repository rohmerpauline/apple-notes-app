import { COLORS } from "@/theme/color";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const AttachElementButton = () => {
  const disabled = true;

  return (
    <Pressable disabled={disabled} style={() => [disabled && styles.disabled]}>
      <FontAwesome
        style={styles.icon}
        name="paperclip"
        size={28}
        color={COLORS.accent}
      />
    </Pressable>
  );
};

export default AttachElementButton;

const styles = StyleSheet.create({
  icon: {
    transform: [{ rotate: "260deg" }],
  },
  disabled: {
    opacity: 0.4,
  },
});
