import { COLORS } from "@/theme/color";
import { FOOTER_HEIGHT } from "@/theme/layout";
import { StyleSheet, View } from "react-native";
import AttachElementButton from "./AttachElementButton";
import CreateCheckListButton from "./CreateCheckListButton";
import CreateFolderButton from "./CreateFolderButton";
import CreateNewNoteButton from "./CreateNewNoteButton";
import DrawButton from "./DrawButton";

export enum FooterFunctionalityOptions {
  FOLDER = "folder",
  CREATE_NOTE = "create-note",
  CREATE_CHECKLIST = "checklist",
  ATTACH_ELEMENT = "attach",
  DRAW = "draw",
}

export type FooterFunctionality =
  | FooterFunctionalityOptions.FOLDER
  | FooterFunctionalityOptions.CREATE_NOTE
  | FooterFunctionalityOptions.CREATE_CHECKLIST
  | FooterFunctionalityOptions.ATTACH_ELEMENT
  | FooterFunctionalityOptions.DRAW;

interface FooterProps {
  footerActive?: boolean;
  items: FooterFunctionality[];
}

const Footer = ({ footerActive = false, items }: FooterProps) => {
  const footerComponentsMap: Record<string, React.FC> = {
    [FooterFunctionalityOptions.FOLDER]: CreateFolderButton,
    [FooterFunctionalityOptions.CREATE_NOTE]: CreateNewNoteButton,
    [FooterFunctionalityOptions.CREATE_CHECKLIST]: CreateCheckListButton,
    [FooterFunctionalityOptions.ATTACH_ELEMENT]: AttachElementButton,
    [FooterFunctionalityOptions.DRAW]: DrawButton,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: footerActive ? COLORS.surface : COLORS.background,
          borderTopWidth: footerActive ? 0.3 : 0,
          borderTopColor: footerActive ? COLORS.border : "none",
        },
      ]}
    >
      {items.map((func) => {
        const Component = footerComponentsMap[func];
        return Component ? <Component key={func} /> : null;
      })}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  addFolderIcon: {
    position: "relative",
  },
  plusIcon: {
    position: "absolute",
    top: 0,
    right: -5,
  },
  plus: {
    zIndex: 20,
  },
  circle: {
    zIndex: 10,
  },
});
