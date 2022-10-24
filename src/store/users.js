import { createSlice } from '@reduxjs/toolkit';
import users from '../source-data/users.json';

const initialState = {
    users: users
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPersoneAC: (state) =>{

    }
  },
});

export const { addPersoneAC } = userSlice.actions;

export default userSlice.reducer;