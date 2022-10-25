import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddPersone: false,
  isChangePersone: false,
  isDeletePersone: false,
  isMultiDeletePersone: false
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
    setIsMultiDeletePersone: (state) => {
      state.isMultiDeletePersone = true;
    },
    resetIsMultiDeletePersone: (state) => {
      state.isMultiDeletePersone = false;
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
  setIsChangePersone,  resetIsChangePersone,
  setIsMultiDeletePersone, resetIsMultiDeletePersone
} = appSlice.actions;

export default appSlice.reducer;