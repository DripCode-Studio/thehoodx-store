import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setAuthToken } from "@/lib/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  
  // Actions
  setAuth: (user: User, accessToken: string) => void;
  updateUser: (user: Partial<User>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      
      setAuth: (user, accessToken) => {
        setAuthToken(accessToken);
        set({ user, accessToken });
      },
      
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
        
      logout: () => {
        setAuthToken(null);
        set({ user: null, accessToken: null });
      },
    }),
    {
      name: "auth-storage", // local storage key
      onRehydrateStorage: () => (state) => {
        // Re-apply the auth token to axios after rehydration
        if (state?.accessToken) {
          setAuthToken(state.accessToken);
        }
      },
    }
  )
);
