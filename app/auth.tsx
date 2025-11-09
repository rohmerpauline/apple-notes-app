import {
  ALL_NOTES_FOLDER_ID,
  ALL_NOTES_TITLE,
  DEFAULT_FOLDER_TYPE,
  RECENTLY_DELETED_FOLDER_ID,
  RECENTLY_DELETED_TITLE,
  UNASSIGNED_NOTES_FOLDER_ID,
  UNASSIGNED_NOTES_TITLE,
} from "@/constants/folders";
import { useCreateFolder } from "@/lib/queries";
import { useBoundStore } from "@/store/useBoundStore";
import { COLORS } from "@/theme/color";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import CustomTextInput, { InputType } from "./components/ui/CustomTextInput";
import PageHeader from "./components/ui/PageHeader";

const AuthScreen = () => {
  const signIn = useBoundStore((state) => state.signIn);
  const signUp = useBoundStore((state) => state.signUp);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");
  const { mutateAsync: createFolder } = useCreateFolder();

  const theme = useTheme();
  const router = useRouter();

  const handleAuth = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null);

    if (isSignUp) {
      const { error, userId } = await signUp(trimmedEmail, trimmedPassword);
      if (error || !userId) {
        setError(error || "Failed to get user ID.");
        return;
      }

      await Promise.all([
        createFolder({
          userId,
          title: ALL_NOTES_TITLE,
          type: DEFAULT_FOLDER_TYPE,
          isModifiable: false,
          rowId: ALL_NOTES_FOLDER_ID,
        }),
        createFolder({
          userId,
          title: UNASSIGNED_NOTES_TITLE,
          type: DEFAULT_FOLDER_TYPE,
          isModifiable: false,
          rowId: UNASSIGNED_NOTES_FOLDER_ID,
        }),
        createFolder({
          userId,
          title: RECENTLY_DELETED_TITLE,
          type: DEFAULT_FOLDER_TYPE,
          isModifiable: false,
          rowId: RECENTLY_DELETED_FOLDER_ID,
        }),
      ]);
    } else {
      const error = await signIn(trimmedEmail, trimmedPassword);
      if (error) {
        setError(error);
        return;
      }
    }

    router.replace("/");
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Connect" />
      <View style={styles.form}>
        <CustomTextInput
          type={InputType.EMAIL}
          value={email}
          setValue={setEmail}
        />
        <CustomTextInput
          type={InputType.PASSWORD}
          value={password}
          setValue={setPassword}
        />
      </View>
      {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
      <Button mode="contained" style={styles.button} onPress={handleAuth}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </Button>
      <Button
        mode="text"
        onPress={handleSwitchMode}
        style={styles.switchModeButton}
        rippleColor="transparent"
      >
        <Text style={styles.switchButtonText}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Dont have an account? Sign Up"}
        </Text>
      </Button>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  form: {
    flexDirection: "column",
    gap: 10,
    marginTop: 30,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.accent,
    color: "#666666",
    alignSelf: "flex-start",
    marginHorizontal: "auto",
    marginTop: 10,
    borderRadius: 10,
  },
  switchModeButton: {
    marginTop: 5,
  },
  switchButtonText: {
    color: "#7f7f7fff",
    fontWeight: 500,
    textDecorationLine: "underline",
  },
});
