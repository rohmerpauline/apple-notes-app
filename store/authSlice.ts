import { account } from "@/lib/appwrite";
import { ID, Models } from "react-native-appwrite";
import { StoreApi } from "zustand";
import { AppState } from "./useBoundStore";

export interface AuthState {
  user: Models.User<Models.Preferences> | null;
  isLoadingUser: boolean;
  setUser: (user: Models.User<Models.Preferences> | null) => void;
  setIsLoadingUser: (isLoadingUser: boolean) => void;
  getUser: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
}

export const createAuthSlice = (
  set: StoreApi<AppState>["setState"],
  get: StoreApi<AppState>["getState"],
  api: StoreApi<AppState>,
): AuthState => ({
  user: null,
  isLoadingUser: true,
  setUser: (user) => set({ user }),
  setIsLoadingUser: (isLoadingUser) => set({ isLoadingUser }),

  // fetch current user
  getUser: async () => {
    set({ isLoadingUser: true });
    try {
      const session = await account.get();
      set({ user: session });
    } catch (error) {
      set({ user: null });
    } finally {
      set({ isLoadingUser: false });
    }
  },

  // sign up
  signUp: async (email, password) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });
      await get().signIn(email, password);
      await get().getUser();
      return null;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return "An error occurred during sign up.";
    }
  },

  // sign in
  signIn: async (email, password) => {
    try {
      await account.createEmailPasswordSession({ email, password });
      await get().getUser();
      return null;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return "An error occurred during sign in.";
    }
  },

  // sign out
  signOut: async () => {
    try {
      await account.deleteSession({ sessionId: "current" });
      set({ user: null });
    } catch (error) {
      console.log(error);
    }
  },
});
