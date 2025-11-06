import { SplashScreen } from "expo-router";
import { useBoundStore } from "./store/useBoundStore";

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const isLoadingUser = useBoundStore((state) => state.isLoadingUser);

  if (!isLoadingUser) {
    SplashScreen.hide();
  }

  return null;
}
