import { createSlice } from '@reduxjs/toolkit';
import users from '../source-data/users.json';

const initialState = {
    users: structuredClone(users.users)
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPersoneAC: (state, action) =>{
      let dataPersone = {
        id: state.users.length + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        middleName: action.payload.middleName,
        organisationId: action.payload.organisationId,
        email: action.payload.email
      };
      state.users = [...state.users, dataPersone];
    },
    changeParsoneAC: (state, action) =>{

    },
    deletePersoneAC: (state, action) => {

    }
  },
});

export const { addPersoneAC, changeParsoneAC, deletePersoneAC } = userSlice.actions;

export default userSlice.reducer;