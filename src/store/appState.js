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
    setIsDeletePersone: (state) => {
      state.isDeletePersone = true;
    },
    resetIsDeletePersone: (state) => {
      state.isDeletePersone = false;
    },
    setIsChangePersone: (state) => {
      state.isChangePersone = true;
    },
    resetIsChangePersone: (state) => {
      state.isChangePersone = false;
    },
  },
});

export const { 
  setIsAddPersone, resetIsAddPersone, 
  setIsDeletePersone, resetIsDeletePersone,
  setIsChangePersone,  resetIsChangePersone
} = appSlice.actions;

export default appSlice.reducer;