"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createStorageWrapper } from "@/util/storage";
import { loginAPI } from "@/api/auth";

type Token = string | null;

interface UserState {
  token: Token;
  refreshToken: Token;
  setToken: (token: Token) => void;
  setRefreshToken: (refreshToken: Token) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: null,
      refreshToken: null,

      setToken: (token) => {
        set(() => ({
          token,
        }));
      },

      setRefreshToken: (refreshToken) => {
        set(() => ({
          refreshToken,
        }));
      },

      login: async (username, password) => {
        const { token, refreshToken } = await loginAPI(username, password);
        set(() => ({
          token,
          refreshToken,
        }));
      },

      logout: async () => {
        set(() => ({
          token: null,
          refreshToken: null,
        }));
      },
    }),
    {
      name: "user",
      storage: createStorageWrapper("session"),
    },
  ),
);

export default useUserStore;
