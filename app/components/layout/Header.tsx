import { COLORS } from "@/theme/color";
import { HEADER_HEIGHT, HEADER_PADDING_TOP } from "@/theme/layout";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  showShadow: boolean;
}

const Header = ({
  title,
  leftComponent,
  rightComponent,
  showShadow,
}: HeaderProps) => {
  return (
    <View style={[styles.container, showShadow && styles.headerShadow]}>
      <View style={styles.side}>{leftComponent}</View>
      <Text style={styles.centerTitle}>{title}</Text>
      <View style={styles.side}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    paddingTop: HEADER_PADDING_TOP,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerShadow: {
    backgroundColor: COLORS.surface,
    borderBottomColor: COLORS.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  side: {
    flex: 1,
  },
  centerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    textAlign: "center",
  },
});
