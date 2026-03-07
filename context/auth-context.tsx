"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { User } from "../lib/types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const DEMO_USERS: (User & { password: string })[] = [
  {
    id: "admin-001",
    email: "admin@base44.com",
    password: "admin123",
    name: "Admin User",
    isAdmin: true,
  },
  {
    id: "user-001",
    email: "user@base44.com",
    password: "user123",
    name: "John Doe",
    isAdmin: false,
  },
];

function loadUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const savedUser = localStorage.getItem("base44-user");
    if (savedUser) return JSON.parse(savedUser);
  } catch {
    // Invalid JSON, ignore
  }
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadUser);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundUser = DEMO_USERS.find(
        (u) => u.email === email && u.password === password,
      );
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem(
          "base44-user",
          JSON.stringify(userWithoutPassword),
        );
        return true;
      }
      return false;
    },
    [],
  );

  const signup = useCallback(
    async (email: string, password: string, name: string): Promise<boolean> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Check if user already exists
      if (DEMO_USERS.some((u) => u.email === email)) {
        return false;
      }

      // Create new user (in real app, this would be saved to database)
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        isAdmin: false,
      };

      setUser(newUser);
      localStorage.setItem("base44-user", JSON.stringify(newUser));
      return true;
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("base44-user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
