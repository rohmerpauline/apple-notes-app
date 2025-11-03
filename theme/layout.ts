import { Platform } from "react-native";

export const FOOTER_HEIGHT = Platform.OS === "ios" ? 80 : 95;
export const HEADER_HEIGHT = Platform.OS === "ios" ? 117 : 80;
export const HEADER_PADDING_TOP = Platform.OS === "ios" ? 60 : 30;
