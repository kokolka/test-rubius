import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAddPersone: false,
    isChangePersone: false,
    isDeletePersone: false
}

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsAddPersone: (state) => {
        state.isAddPersone = true;
    },
    resetIsAddPersone: (state) => {
        state.isAddPersone = false;
    },
  },
});

export const { setIsAddPersone, resetIsAddPersone } = appSlice.actions;

export default appSlice.reducer;