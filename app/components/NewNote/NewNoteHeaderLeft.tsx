import { COLORS } from "@/theme/color";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const NewNoteHeaderLeft = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={styles.backButton}>
      <Feather name="chevron-left" size={25} color={COLORS.accent} />
      <Text style={styles.backText}>Folders</Text>
    </Pressable>
  );
};

export default NewNoteHeaderLeft;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 20,
    color: COLORS.accent,
    marginLeft: 4,
  },
});
