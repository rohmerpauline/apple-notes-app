import { FolderTable } from "@/types/database.type";
import { StoreApi } from "zustand";
import { AppState } from "./useBoundStore";

export interface FolderState {
  folders: FolderTable[];
  setFolders: (folders: FolderTable[]) => void;
  getFoldersNames: () => string[];
  newFolderName: string;
  setNewFolderName: (newFolderName: string) => void;
}

export const createFolderSlice = (
  set: StoreApi<AppState>["setState"],
  get: StoreApi<AppState>["getState"],
  api: StoreApi<AppState>,
): FolderState => ({
  folders: [],
  setFolders: (folders) => set({ folders }),
  getFoldersNames: () => get().folders.map((f) => f.title),
  newFolderName: "",
  setNewFolderName: (newFolderName) => set({ newFolderName }),
});
