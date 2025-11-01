import { COLORS } from "@/theme/color";
import { Feather } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.background },
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "" }} />
      <Stack.Screen
        name="new-note"
        options={{
          header: () => {
            const router = useRouter();
            return (
              <View style={styles.headerContainer}>
                <Pressable
                  onPress={() => router.back()}
                  style={styles.backButton}
                >
                  <Feather
                    name="chevron-left"
                    size={25}
                    color={COLORS.accent}
                  />
                  <Text style={styles.backText}>Folders</Text>
                </Pressable>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    paddingTop: 70,
  },
  backButton: {
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  backText: {
    fontSize: 20,
    color: COLORS.accent,
  },
});
