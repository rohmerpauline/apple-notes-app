import { StoreApi } from "zustand";
import { AppState } from "./useBoundStore";

export interface HeaderTitleState {
  title: string;
  previousTitle: string;
  titleVisible: boolean;
  setTitle: (title: string) => void;
  setPreviousTitle: (previousTitle: string) => void;
  setTitleVisible: (titleVisible: boolean) => void;
}

export const createHeaderTitleSlice = (
  set: StoreApi<AppState>["setState"],
  get: StoreApi<AppState>["getState"],
  api: StoreApi<AppState>,
): HeaderTitleState => ({
  title: "",
  previousTitle: "",
  titleVisible: false,
  setTitle: (title) => set({ title }),
  setPreviousTitle: (previousTitle) => set({ previousTitle }),
  setTitleVisible: (titleVisible) => set({ titleVisible }),
});
