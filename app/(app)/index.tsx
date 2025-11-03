import { useScreenHeaderTitle } from "@/hook/useScreenHeaderTitle";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { FooterFunctionalityOptions } from "../components/layout//Footer";
import ScreenWrapper from "../components/layout/ScreenWrapper";
import PageHeader from "../components/ui/PageHeader";

const FOOTER_ITEMS = [
  FooterFunctionalityOptions.FOLDER,
  FooterFunctionalityOptions.CREATE_NOTE,
];

const HomeScreen = () => {
  const { scrollProps, canScrollFurther } = useScreenHeaderTitle("Folders");
  const items = Array.from({ length: 55 }, (_, i) => i + 1);

  return (
    <ScreenWrapper
      canScrollFurther={canScrollFurther}
      items={FOOTER_ITEMS}
      headerTitle="Folders"
    >
      <ScrollView {...scrollProps} showsVerticalScrollIndicator={false}>
        <PageHeader title="Folders" />
        <View>
          {items.map((num) => (
            <Text key={num}>Élément {num}</Text>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;
