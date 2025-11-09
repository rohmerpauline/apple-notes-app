import { RECENTLY_DELETED_FOLDER_ID } from "@/constants/folders";
import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { FolderTable } from "@/types/database.type";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FolderModifyActions from "./FolderModifyActions";

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
    folder.$id !== RECENTLY_DELETED_FOLDER_ID ? (
      <FontAwesome6 name="folder-closed" size={22} color={iconColor} />
    ) : (
      <Ionicons name="trash-outline" size={22} color={iconColor} />
    );

  return (
    <Pressable style={styles.container} disabled={isDisabled}>
      {folderIcon}
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
          isFolderModifiable && <FolderModifyActions />
        ) : (
          <View style={styles.rightSide}>
            <Text style={styles.numberOfNotes}>{folder.note_count}</Text>
            <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
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
  numberOfNotes: {
    fontSize: 18,
    color: COLORS.border,
    marginRight: 6,
  },
});
