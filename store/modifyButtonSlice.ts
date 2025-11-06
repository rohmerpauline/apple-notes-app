import { StoreApi } from "zustand";
import { AppState } from "./useBoundStore";

export interface ModifyButtonState {
  isModifying: boolean;
  setIsModifying: (isModifying: boolean) => void;
}

export const createModifyButtonSlice = (
  set: StoreApi<AppState>["setState"],
  get: StoreApi<AppState>["getState"],
  api: StoreApi<AppState>,
): ModifyButtonState => ({
  isModifying: false,
  setIsModifying: (isModifying) => set({ isModifying }),
});
