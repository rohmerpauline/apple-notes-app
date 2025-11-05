import { FOOTER_HEIGHT } from "@/theme/layout";
import { StyleSheet, View } from "react-native";
import Footer, { FooterFunctionality } from "./Footer";

interface ScreenWrapperProps {
  children: React.ReactNode;
  canScrollFurther?: boolean;
  items: FooterFunctionality[];
  headerTitle?: string;
}

const ScreenWrapper = ({
  children,
  canScrollFurther,
  items,
}: ScreenWrapperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer canScrollFurther={canScrollFurther} items={items} />
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: FOOTER_HEIGHT,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
});
