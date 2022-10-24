import { createSlice } from '@reduxjs/toolkit';
import organisations from '../source-data/organisations.json';

const initialState = {
    organisations: organisations
}

export const organisationSlice = createSlice({
  name: 'organisations',
  initialState,
  reducers: {
    
  },
});

export const {  } = organisationSlice.actions;

export default organisationSlice.reducer;