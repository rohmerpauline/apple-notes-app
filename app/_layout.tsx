import 'react-native-reanimated';

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { HeaderTitleProvider } from "@/context/HeaderTitleContext";
import { COLORS } from "@/theme/color";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SplashScreenController } from "../splash";

const Root = () => {
  return (
    <AuthProvider>
      <HeaderTitleProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <SplashScreenController />
            <RootNavigator />
          </SafeAreaProvider>
        </PaperProvider>
      </HeaderTitleProvider>
    </AuthProvider>
  );
};

const RootNavigator = () => {
  const { user, isLoadingUser } = useAuth();

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
