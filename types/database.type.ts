import { Models } from "react-native-appwrite";

export type FolderTable = Models.DefaultRow & {
  id: number | string;
  user_id: number;
  title: string;
  type: string;
  is_modifiable: boolean;
  noteCount: number;
};
