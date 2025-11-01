import { COLORS } from "@/theme/color";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const CreateCheckListButton = () => {
  const disabled = true;

  return (
    <Pressable
      style={[styles.container, disabled && styles.disabled]}
      disabled={disabled}
    >
      <View style={styles.iconRow}>
        <Ionicons name="checkmark-circle" size={11} color={COLORS.accent} />
        <AntDesign name="line" size={13} color={COLORS.accent} />
      </View>
      <View style={styles.iconRow}>
        <FontAwesome name="circle-o" size={11} color={COLORS.accent} />
        <AntDesign name="line" size={13} color={COLORS.accent} />
      </View>
    </Pressable>
  );
};

export default CreateCheckListButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  disabled: {
    opacity: 0.4,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {},
});
