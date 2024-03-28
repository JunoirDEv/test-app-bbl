import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface AuthState {
  profile: null;
  isLogin: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProFile(state, actions: PayloadAction<null>) {
      state.profile = actions.payload;
    },
  },
});

export const {setProFile} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
