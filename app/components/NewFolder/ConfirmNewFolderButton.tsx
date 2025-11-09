import { USER_FOLDER_TYPE } from "@/constants/folders";
import { useCreateFolder } from "@/lib/queries";
import { useBoundStore } from "@/store/useBoundStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ID } from "react-native-appwrite";
import TextButton from "../ui/TextButton";

const ConfirmNewFolderButton = () => {
  const router = useRouter();
  const user = useBoundStore((state) => state.user);
  const newFolderName = useBoundStore((state) => state.newFolderName);
  const { mutateAsync: createFolder } = useCreateFolder();
  const [error, setError] = useState<string>("");

  const handleClickCreateFolder = async () => {
    if (!user) return;

    try {
      await createFolder({
        userId: user.$id,
        title: newFolderName,
        type: USER_FOLDER_TYPE,
        isModifiable: true,
        rowId: ID.unique(),
      });

      router.back();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("There was an error creating the folder.");
    }
  };

  return <TextButton label="OK" onPress={handleClickCreateFolder} />;
};

export default ConfirmNewFolderButton;
