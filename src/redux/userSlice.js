import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("payload", action.payload);
      return action.payload;
    },
    logout: () => {
      return null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
