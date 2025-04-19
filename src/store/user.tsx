import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Token = string | null;
interface UserState {
  token: Token;
  refreshToken: Token;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    refreshToken: null,
  } as UserState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    login: (
      state,
      action: PayloadAction<{ token: Token; refreshToken: Token }>
    ) => {
      const token = action.payload.token;
      const refreshToken = action.payload.refreshToken;
      state.token = token;
      state.refreshToken = refreshToken;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, setRefreshToken, login, logout } = userSlice.actions;
export default userSlice.reducer;
