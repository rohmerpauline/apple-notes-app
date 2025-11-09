import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { StyleSheet } from "react-native";
import TextButton from "../ui/TextButton";

const ModifyButton = () => {
  const isModifying = useBoundStore((state) => state.isModifying);
  const setIsModifying = useBoundStore((state) => state.setIsModifying);

  const handleClick = () => {
    setIsModifying(!isModifying);
  };

  const buttonLabel = isModifying ? "OK" : "Modify";

  return <TextButton label={buttonLabel} onPress={handleClick} />;
};

export default ModifyButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "normal",
    color: COLORS.accent,
    textAlign: "right",
  },
});
