import { FOOTER_HEIGHT } from "@/theme/layout";
import { StyleSheet, View } from "react-native";
import Footer, { FooterFunctionality } from "./Footer";

interface ScreenWrapperProps {
  children: React.ReactNode;
  footerActive?: boolean;
  items: FooterFunctionality[];
}

const ScreenWrapper = ({
  children,
  footerActive,
  items,
}: ScreenWrapperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer footerActive={footerActive} items={items} />
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
    paddingHorizontal: 30,
    paddingTop: 20,
    flexGrow: 1,
  },
});
