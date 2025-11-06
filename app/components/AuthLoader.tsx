import { useBoundStore } from "@/store/useBoundStore";
import { useEffect } from "react";
import { View } from "react-native";

const AuthLoader = ({ children }: { children: any }) => {
  useEffect(() => {
    useBoundStore.getState().getUser();
  }, []);

  return <View>{children}</View>;
};

export default AuthLoader;
