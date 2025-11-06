import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { FolderTable, RECENTLY_DELETED_FOLDER_ID } from "@/types/database.type";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FolderProps {
  folder: FolderTable;
}

const Folder = ({ folder }: FolderProps) => {
  const isModifying = useBoundStore((state) => state.isModifying);

  const isFolderModifiable = folder.is_modifiable;
  const isDisabled = isModifying && !isFolderModifiable;

  const textColor = isDisabled ? COLORS.lightGrey : COLORS.text;
  const iconColor = isDisabled ? COLORS.lightGrey : COLORS.accent;
  const textOpacity = isDisabled ? 0.8 : 1;

  const folderIcon =
    folder.id === RECENTLY_DELETED_FOLDER_ID ? (
      <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
    ) : (
      <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
    );

  return (
    <Pressable style={styles.container}>
      <FontAwesome6 name="folder-closed" size={22} color={iconColor} />
      <View style={styles.folderContent}>
        <Text
          style={[
            styles.folderName,
            {
              color: textColor,
              opacity: textOpacity,
            },
          ]}
        >
          {folder.title}
        </Text>
        {isModifying ? (
          isFolderModifiable && (
            <View style={styles.modifyContainer}>
              <View style={[styles.iconWrapper, styles.dotsIcon]}>
                <MaterialCommunityIcons
                  name="dots-horizontal-circle-outline"
                  size={24}
                  color={COLORS.accent}
                />
              </View>
              <View style={styles.iconWrapper}>
                <Ionicons
                  name="menu-outline"
                  size={24}
                  color={COLORS.lightGrey}
                />
              </View>
            </View>
          )
        ) : (
          <View style={styles.rightSide}>
            <Text style={styles.numberOfNotes}>{folder.noteCount}</Text>
            {folderIcon}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Folder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  folderContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.lightGrey,
    marginLeft: 15,
    paddingRight: 15,
  },
  folderName: {
    flexShrink: 1,
    fontSize: 18,
    paddingVertical: 13,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
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
  numberOfNotes: {
    fontSize: 18,
    color: COLORS.border,
    marginRight: 6,
  },
});
