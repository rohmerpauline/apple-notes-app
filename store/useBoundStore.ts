import { create, StoreApi } from "zustand";
import { AuthState, createAuthSlice } from "./authSlice";
import { createHeaderTitleSlice, HeaderTitleState } from "./headerTitleSlice";

type SliceArgs<S> = [
  set: StoreApi<S>["setState"],
  get: StoreApi<S>["getState"],
  api: StoreApi<S>,
];

export interface AppState extends HeaderTitleState, AuthState {}

export const useBoundStore = create<AppState>((...a: SliceArgs<AppState>) => ({
  ...createHeaderTitleSlice(...a),
  ...createAuthSlice(...a),
}));
