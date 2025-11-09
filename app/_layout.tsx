import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SplashScreenController } from "../splash";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <SafeAreaProvider>
          <SplashScreenController />
          <RootNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
};

const RootNavigator = () => {
  const user = useBoundStore((state) => state.user);
  const isLoadingUser = useBoundStore((state) => state.isLoadingUser);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    useBoundStore.getState().getUser();
  }, []);

  if (isLoadingUser) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.background },
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" options={{ headerTitle: "" }} />
      </Stack.Protected>
    </Stack>
  );
};

export default Root;
