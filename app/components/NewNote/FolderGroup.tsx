import { COLORS } from "@/theme/color";
import { FolderTable } from "@/types/database.type";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Folder from "./Folder";

interface FolderGroupProps {
  folders: FolderTable[];
}

const FolderGroup = ({ folders }: FolderGroupProps) => {
  const [dropDownOpen, setDropDownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropDownOpen((prev) => !prev);
  };

  const iconDropDown = dropDownOpen ? (
    <Ionicons name="chevron-down-outline" size={24} color={COLORS.accent} />
  ) : (
    <Ionicons name="chevron-forward-outline" size={24} color={COLORS.accent} />
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.groupName}>Notes</Text>
        {iconDropDown}
      </Pressable>
      {dropDownOpen && (
        <View style={styles.folderContainer}>
          {folders.map((folder) => (
            <Folder key={folder.$id} folder={folder} />
          ))}
        </View>
      )}
    </View>
  );
};

export default FolderGroup;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  groupName: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  folderContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
});
