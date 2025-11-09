import { NEW_FOLDER_NAME } from "@/constants/folders";
import { useBoundStore } from "@/store/useBoundStore";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CustomTextInput from "../components/ui/CustomTextInput";

const getPlaceholder = (folderNames: string[]) => {
  const extractNumber = (name: string): number => {
    const match = name.match(/\d+$/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Filter folders "New folder"
  const existingNewFolders = folderNames.filter((name) =>
    name.startsWith(NEW_FOLDER_NAME),
  );

  // Get the highest existing folder number
  const highestFolderNumber = existingNewFolders.length
    ? Math.max(...existingNewFolders.map(extractNumber))
    : null;

  return highestFolderNumber !== null
    ? `${NEW_FOLDER_NAME} ${highestFolderNumber + 1}`
    : NEW_FOLDER_NAME;
};

const NewFolderScreen = () => {
  const newFolderName = useBoundStore((state) => state.newFolderName);
  const setNewFolderName = useBoundStore((state) => state.setNewFolderName);
  const getFoldersNames = useBoundStore((state) => state.getFoldersNames);
  const folderNames = getFoldersNames();

  useEffect(() => {
    const placeholder = getPlaceholder(folderNames);
    setNewFolderName(placeholder);
  }, []);

  return (
    <View style={styles.container}>
      <CustomTextInput
        value={newFolderName}
        setValue={setNewFolderName}
        placeholder=""
        resettable={true}
      />
    </View>
  );
};

export default NewFolderScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
});
