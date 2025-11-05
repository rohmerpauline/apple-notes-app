import { useHeaderTitle } from "@/context/HeaderTitleContext";
import { COLORS } from "@/theme/color";
import { Stack } from "expo-router";
import ModifyButton from "../components/Home/ModifyButton";
import Header from "../components/layout/Header";
import NewNoteHeaderLeft from "../components/NewNote/NewNoteHeaderLeft";

export default function AppLayout() {
  const { title, titleVisible } = useHeaderTitle();

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
          title: headerTitle,
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
    </Stack>
  );
}
