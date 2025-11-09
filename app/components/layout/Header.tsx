import { COLORS } from "@/theme/color";
import { HEADER_HEIGHT, HEADER_PADDING_TOP } from "@/theme/layout";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  showShadow: boolean;
  type?: string;
}

const Header = ({
  title,
  leftComponent,
  rightComponent,
  showShadow,
  type = "default",
}: HeaderProps) => {
  return (
    <View
      style={[
        styles.container,
        showShadow && styles.headerShadow,
        {
          height: type == "modal" ? 80 : HEADER_HEIGHT,
          paddingTop: type == "modal" ? 0 : HEADER_PADDING_TOP,
        },
      ]}
    >
      <View
        style={[styles.left, { top: type == "modal" ? 0 : HEADER_PADDING_TOP }]}
      >
        {leftComponent}
      </View>
      <View style={styles.center}>
        <Text style={styles.centerTitle}>{title}</Text>
      </View>
      <View
        style={[
          styles.right,
          { top: type == "modal" ? 0 : HEADER_PADDING_TOP },
        ]}
      >
        {rightComponent}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
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
    bottom: 0,
    justifyContent: "center",
  },
  right: {
    position: "absolute",
    right: 20,
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
