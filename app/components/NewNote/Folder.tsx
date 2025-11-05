import { COLORS } from "@/theme/color";
import { FolderTable, RECENTLY_DELETED_FOLDER_ID } from "@/types/database.type";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FolderProps {
  folder: FolderTable;
}

const Folder = ({ folder }: FolderProps) => {
  const folderIcon =
    folder.id === RECENTLY_DELETED_FOLDER_ID ? (
      <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
    ) : (
      <Ionicons name="chevron-forward" size={20} color={COLORS.border} />
    );

  return (
    <Pressable style={styles.container}>
      <FontAwesome6 name="folder-closed" size={22} color={COLORS.accent} />
      <View style={styles.folderContent}>
        <Text style={styles.folderName}>{folder.title}</Text>
        <View style={styles.rightSide}>
          <Text style={styles.numberOfNotes}>{folder.noteCount}</Text>
          {folderIcon}
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cdcbcbff",
    paddingVertical: 13,
    paddingRight: 15,
    flex: 1,
    marginLeft: 15,
  },
  folderName: {
    fontSize: 18,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberOfNotes: {
    fontSize: 18,
    color: COLORS.border,
    marginRight: 5,
  },
});
