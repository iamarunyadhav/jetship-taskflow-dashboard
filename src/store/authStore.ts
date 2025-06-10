// src/store/authStore.ts
import { create } from "zustand";
import { login as apiLogin, register as apiRegister } from "@/services/api";
import { User } from "../types";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  initAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: !!localStorage.getItem("token"),
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
  
  login: async (email, password) => {
    const res = await apiLogin({ email, password });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },

  register: async (name, email, password) => {
    const res = await apiRegister({
      name,
      email,
      password,
      password_confirmation: password,
    });
    const user = res.data.user || res.data.data || { name, email };
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, isAuthenticated: false });
  },

  initAuth: () => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    set({ user, isAuthenticated: !!token });
  },
}));
