import {createSlice} from '@reduxjs/toolkit';
const defaultSate = {
  loading: false,
  error: false,
  currentUser: null,
};
const slice = createSlice({
  name: 'auth',
  initialState: defaultSate,
  reducers: {
    sigin: (state, action) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signinError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signout: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null;
    },
  },
});
const authReducer = slice.reducer;
export default authReducer;
export const {sigin, signinSuccess, signinError, signout} = slice.actions;
