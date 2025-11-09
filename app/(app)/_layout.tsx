import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { Stack, useRouter } from "expo-router";
import ModifyButton from "../components/Home/ModifyButton";
import Header from "../components/layout/Header";
import NewNoteHeaderLeft from "../components/NewNote/NewNoteHeaderLeft";
import TextButton from "../components/ui/TextButton";

export default function AppLayout() {
  const title = useBoundStore((state) => state.title);
  const titleVisible = useBoundStore((state) => state.titleVisible);

  const headerTitle = titleVisible ? title : "";
  const headerShadowVisible = titleVisible ? true : false;

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.background },
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <Header
              title={headerTitle}
              showShadow={headerShadowVisible}
              rightComponent={<ModifyButton />}
            />
          ),
        }}
      />
      <Stack.Screen
        name="new-note"
        options={{
          header: () => (
            <Header
              title={headerTitle}
              showShadow={headerShadowVisible}
              leftComponent={<NewNoteHeaderLeft />}
            />
          ),
        }}
      />
      <Stack.Screen
        name="new-folder"
        options={{
          presentation: "modal",
          title: "New note",
          header: () => {
            const router = useRouter();
            return (
              <Header
                title="New Folder"
                showShadow={false}
                type="modal"
                leftComponent={
                  <TextButton label="Cancel" onPress={() => router.back()} />
                }
                rightComponent={
                  <TextButton label="OK" onPress={() => router.back()} />
                }
              />
            );
          },
        }}
      />
    </Stack>
  );
}
