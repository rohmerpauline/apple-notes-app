import { useScrollableFooter } from "@/hook/useScrollableFooter";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { FooterFunctionalityOptions } from "../components/layout//Footer";
import ScreenWrapper from "../components/layout/ScreenWrapper";
import PageHeader from "../components/ui/PageHeader";

const FOOTER_ITEMS = [
  FooterFunctionalityOptions.FOLDER,
  FooterFunctionalityOptions.CREATE_NOTE,
];

const HomeScreen = () => {
  const router = useRouter();
  const { scrollProps, footerActive } = useScrollableFooter();

  return (
    <ScreenWrapper footerActive={footerActive} items={FOOTER_ITEMS}>
      <ScrollView {...scrollProps} showsVerticalScrollIndicator={false}>
        <PageHeader title="Folders" />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;
