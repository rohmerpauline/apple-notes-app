import { COLORS } from "@/theme/color";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const DrawButton = () => {
  const disabled = true;

  return (
    <Pressable disabled={disabled} style={() => [disabled && styles.disabled]}>
      <View style={styles.container}>
        <SimpleLineIcons
          name="pencil"
          size={28}
          color={COLORS.accent}
          style={styles.pencil}
        />
        <Feather
          name="circle"
          size={28}
          color={COLORS.accent}
          style={styles.circle}
        />
      </View>
    </Pressable>
  );
};

export default DrawButton;

const styles = StyleSheet.create({
  container: {
    height: 27,
    width: 28,
    borderRadius: 100,
    overflow: "hidden",
  },
  disabled: {
    opacity: 0.4,
  },
  pencil: {
    transform: [{ rotate: "136deg" }],
    position: "absolute",
    top: 14,
  },
  circle: {
    position: "absolute",
  },
});
