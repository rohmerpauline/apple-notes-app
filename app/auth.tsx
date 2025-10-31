import { COLORS } from "@/theme/color";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import CustomTextInput, { InputType } from "./components/CustomTextInput";
import PageHeader from "./components/PageHeader";

const AuthScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

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
      <Button mode="contained" style={styles.button}>
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
