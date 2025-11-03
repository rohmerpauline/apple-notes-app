import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Text style={styles.header} variant="headlineMedium">
      {title}
    </Text>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: -0.3,
    paddingVertical: 10,
  },
});
