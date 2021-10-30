import {
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '@store/index';

export type User = {
  id?: string;
  name?: string;
  birthdate?: string;
  gender?: string;
  token?: string;
  refreshToken?: string;
};

type UserState = {
  data: User;
};

const initialState: UserState = {
  data: {},
};

export const userSlice = createSlice({
  name: 'app/user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.data = action.payload;
    },
    logout(state) {
      state.data = {};
    },
  },
});

export const {login, logout} = userSlice.actions;

const userSelector = (state: RootState) => state.user.data;

export const isLoggedSelector = createDraftSafeSelector(
  userSelector,
  state => !!state.token,
);
export const userTokenSelector = createDraftSafeSelector(
  userSelector,
  state => state.token,
);

export default userSlice.reducer;
