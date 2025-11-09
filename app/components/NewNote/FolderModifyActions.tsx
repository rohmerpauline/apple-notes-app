import { COLORS } from "@/theme/color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const FolderModifyActions = () => {
  return (
    <View style={styles.modifyContainer}>
      <Pressable style={[styles.iconWrapper, styles.dotsIcon]}>
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          size={24}
          color={COLORS.accent}
        />
      </Pressable>
      <Pressable style={styles.iconWrapper}>
        <Ionicons name="menu-outline" size={24} color={COLORS.lightGrey} />
      </Pressable>
    </View>
  );
};

export default FolderModifyActions;

const styles = StyleSheet.create({
  modifyContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  iconWrapper: {
    justifyContent: "center",
    paddingHorizontal: 5,
    alignSelf: "stretch",
  },
  dotsIcon: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: COLORS.lightGrey,
  },
});
