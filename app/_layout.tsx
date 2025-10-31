import { AuthProvider, useAuth } from "@/context/AuthContext";
import { COLORS } from "@/theme/color";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SplashScreenController } from "../splash";

const Root = () => {
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <SplashScreenController />
          <RootNavigator />
        </SafeAreaProvider>
      </PaperProvider>
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
        <Stack.Screen name="index" />
      </Stack.Protected>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" />
      </Stack.Protected>
    </Stack>
  );
};

export default Root;
