import { useScrollableFooter } from "@/hook/useScrollableFooter";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { FooterFunctionalityOptions } from "../components/layout/Footer";
import ScreenWrapper from "../components/layout/ScreenWrapper";

const FOOTER_ITEMS = [
  FooterFunctionalityOptions.CREATE_CHECKLIST,
  FooterFunctionalityOptions.ATTACH_ELEMENT,
  FooterFunctionalityOptions.DRAW,
  FooterFunctionalityOptions.CREATE_NOTE,
];

const NewNoteScreen = () => {
  const { scrollProps, footerActive } = useScrollableFooter();
  return (
    <ScreenWrapper footerActive={footerActive} items={FOOTER_ITEMS}>
      <ScrollView {...scrollProps} showsVerticalScrollIndicator={false}>
        <Text>new note</Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default NewNoteScreen;
