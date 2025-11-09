import { useScreenHeaderTitle } from "@/hook/useScreenHeaderTitle";
import { useFolders } from "@/lib/queries";
import { useBoundStore } from "@/store/useBoundStore";
import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { FooterFunctionalityOptions } from "../components/layout//Footer";
import ScreenWrapper from "../components/layout/ScreenWrapper";
import FolderGroup from "../components/NewNote/FolderGroup";
import PageHeader from "../components/ui/PageHeader";

const FOOTER_ITEMS = [
  FooterFunctionalityOptions.FOLDER,
  FooterFunctionalityOptions.CREATE_NOTE,
];

const HomeScreen = () => {
  const { scrollProps, canScrollFurther } = useScreenHeaderTitle("Folders");
  const setFolders = useBoundStore((state) => state.setFolders);
  const user = useBoundStore((state) => state.user);
  const { data: folders = [] } = useFolders(user?.$id ?? "");

  useEffect(() => {
    setFolders(folders);
  }, [folders, setFolders]);

  if (folders.length === 0) return;

  return (
    <ScreenWrapper
      canScrollFurther={canScrollFurther}
      items={FOOTER_ITEMS}
      headerTitle="Folders"
    >
      <FlatList
        {...scrollProps}
        data={[{ id: "group1", folders }]}
        renderItem={({ item }) => <FolderGroup folders={item.folders} />}
        keyExtractor={(item, idx) => item.folders[idx].$id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<PageHeader title="Folders" />}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  folderContainer: {
    backgroundColor: "white",
    borderRadius: 8,
  },
});
