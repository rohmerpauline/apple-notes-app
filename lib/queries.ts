import { FolderTable } from "@/types/database.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ID, Query } from "react-native-appwrite";
import { DATABASE_ID, FOLDERS_TABLE_ID, tablesDB } from "./appwrite";

export const queryKeys = {
  folders: ["folders"] as const,
};

// Fetch folders
export const useFolders = (userId: string) => {
  return useQuery({
    queryKey: [...queryKeys.folders, userId],
    queryFn: async () => {
      const result = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: FOLDERS_TABLE_ID,
        queries: [Query.equal("user_id", userId ?? "")],
      });
      return result.rows as FolderTable[];
    },
  });
};

// Create folder
export const useCreateFolder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (folderData: {
      userId: string;
      title: string;
      type: string;
      isModifiable: boolean;
      noteCount?: number;
      rowId?: string;
    }) => {
      const data: Record<string, any> = {
        user_id: folderData.userId,
        title: folderData.title,
        type: folderData.type,
        is_modifiable: folderData.isModifiable,
      };

      if (folderData.noteCount !== undefined) {
        data.note_count = folderData.noteCount;
      }
      return await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: FOLDERS_TABLE_ID,
        rowId: folderData.rowId ?? ID.unique(),
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.folders });
    },
  });
};
