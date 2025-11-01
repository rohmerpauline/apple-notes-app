import { COLORS } from "@/theme/color";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

const CreateNewNoteButton = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/(app)/new-note")}>
      <Ionicons name="create-outline" size={28} color={COLORS.accent} />
    </Pressable>
  );
};

export default CreateNewNoteButton;
