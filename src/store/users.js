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
        id: state.users[state.users.length - 1].id + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        middleName: action.payload.middleName,
        organisationId: action.payload.organisationId,
        email: action.payload.email
      };
      state.users = [...state.users, dataPersone];
    },
    changeParsoneAC: (state, action) =>{
      debugger
      console.log(action)
      debugger
      let dataPersone = {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        middleName: action.payload.middleName,
        organisationId: action.payload.organisationId,
        email: action.payload.email
      };
      state.users[action.payload.id-1] = dataPersone;
    },
    deletePersoneAC: (state, action) => {
      state.users = state.users.filter((el) => {
        if(el.id !== action.payload){
          return el;
        }
      });
    }
  },
});

export const { addPersoneAC, changeParsoneAC, deletePersoneAC } = userSlice.actions;

export default userSlice.reducer;