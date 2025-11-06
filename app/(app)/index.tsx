import { useScreenHeaderTitle } from "@/hook/useScreenHeaderTitle";
import { FolderTable } from "@/types/database.type";
import { FlatList, StyleSheet } from "react-native";
import { FooterFunctionalityOptions } from "../components/layout//Footer";
import ScreenWrapper from "../components/layout/ScreenWrapper";
import FolderGroup from "../components/NewNote/FolderGroup";
import PageHeader from "../components/ui/PageHeader";

const FOOTER_ITEMS = [
  FooterFunctionalityOptions.FOLDER,
  FooterFunctionalityOptions.CREATE_NOTE,
];

const folders: FolderTable[] = [
  {
    id: "all-notes",
    title: "Notes (all)",
    type: "default",
    is_modifiable: false,
    noteCount: 50,
  },
  {
    id: "unassigned-notes",
    title: "Notes",
    type: "default",
    is_modifiable: false,
    noteCount: 25,
  },
  {
    id: 3,
    title: "Notes persos",
    type: "user",
    is_modifiable: true,
    noteCount: 10,
  },
  {
    id: 4,
    title: "Recettes",
    type: "user",
    is_modifiable: true,
    noteCount: 10,
  },
  {
    id: 5,
    title: "Liste de courses",
    type: "user",
    is_modifiable: true,
    noteCount: 5,
  },
  {
    id: "recently-deleted",
    title: "Recently deleted",
    type: "default",
    is_modifiable: false,
    noteCount: 3,
  },
];

const HomeScreen = () => {
  const { scrollProps, canScrollFurther } = useScreenHeaderTitle("Folders");

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
        keyExtractor={(item, idx) => item.folders[idx].id}
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
