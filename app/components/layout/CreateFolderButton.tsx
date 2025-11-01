import { COLORS } from "@/theme/color";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const CreateFolderButton = () => {
  return (
    <Pressable style={styles.addFolderIcon}>
      <Ionicons name="folder-outline" size={28} color={COLORS.accent} />
      <Entypo
        style={[styles.plusIcon, styles.plus]}
        name="circle-with-plus"
        size={14}
        color={COLORS.accent}
      />
      <FontAwesome
        style={[styles.plusIcon, styles.circle]}
        name="circle"
        size={14}
        color={COLORS.primary}
      />
    </Pressable>
  );
};

export default CreateFolderButton;

const styles = StyleSheet.create({
  addFolderIcon: {
    position: "relative",
  },
  plusIcon: {
    position: "absolute",
    top: 0,
    right: -5,
  },
  plus: {
    zIndex: 20,
  },
  circle: {
    zIndex: 10,
  },
});
