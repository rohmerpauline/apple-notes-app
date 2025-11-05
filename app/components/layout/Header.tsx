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
      <View style={styles.left}>{leftComponent}</View>
      <View style={styles.center}>
        <Text style={styles.centerTitle}>{title}</Text>
      </View>
      <View style={styles.right}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    paddingTop: HEADER_PADDING_TOP,
    justifyContent: "center",
    alignItems: "center",
  },
  headerShadow: {
    backgroundColor: COLORS.surface,
    borderBottomColor: COLORS.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  left: {
    position: "absolute",
    left: 20,
    top: HEADER_PADDING_TOP,
    bottom: 0,
    justifyContent: "center",
  },
  right: {
    position: "absolute",
    right: 20,
    top: HEADER_PADDING_TOP,
    bottom: 0,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  centerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
