import { COLORS } from "@/theme/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export enum InputType {
  PASSWORD = "password",
  EMAIL = "email",
  TEXT = "text",
}

const InputPlaceholder: Record<InputType, string> = {
  [InputType.PASSWORD]: "Password",
  [InputType.EMAIL]: "Email",
  [InputType.TEXT]: "Enter your text",
};

const AutoComplete: Record<InputType, RNTextInputProps["autoComplete"]> = {
  [InputType.PASSWORD]: "current-password",
  [InputType.EMAIL]: "username",
  [InputType.TEXT]: "off",
};

interface TextInputProps {
  type?: InputType;
  /*The string that will be rendered before text input has been entered. Default provided but can be customized.*/
  placeholder?: string;
  value: string;
  setValue: (_text: string) => void;
  /*Specifies autocomplete hints for the system, so it can provide autofill. Default provided but can be customized.*/
  autoComplete?: RNTextInputProps["autoComplete"];
  /*If true, the input text will be masked (e.g., for passwords, PINs, or other sensitive fields). Default is false except for PASSWORD type.*/
  secureTextEntry?: boolean;
  /*If true, the value can be reset to its initial state.*/
  resettable?: boolean;
}

const CustomTextInput = ({
  type = InputType.TEXT,
  placeholder,
  value,
  setValue,
  autoComplete,
  secureTextEntry,
  resettable = false,
}: TextInputProps) => {
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const visibilityIconName = inputVisible ? "eye" : "eye-off";
  const inputPlaceholder = placeholder ?? InputPlaceholder[type];
  const secureText =
    secureTextEntry ?? (type === InputType.PASSWORD && !inputVisible);
  const autoCapitalize =
    type === InputType.EMAIL || type === InputType.PASSWORD
      ? "none"
      : "sentences";
  const keyBoardType = type === InputType.EMAIL ? "email-address" : "default";
  const autoCompleteValue = autoComplete ?? AutoComplete[type];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={inputPlaceholder}
        secureTextEntry={secureText}
        scrollEnabled={true}
        multiline={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyBoardType}
        autoCorrect={false}
        autoComplete={autoCompleteValue}
        accessibilityLabel={inputPlaceholder}
      />
      {type === InputType.PASSWORD && (
        <Pressable
          onPress={() => setInputVisible((prev) => !prev)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
        >
          <MaterialCommunityIcons
            name={visibilityIconName}
            size={25}
            color={COLORS.accent}
          />
        </Pressable>
      )}
      {resettable && (
        <Pressable
          onPress={() => setValue("")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={22}
            color={COLORS.lightGrey}
          />
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
    paddingVertical: 10,
  },
});
