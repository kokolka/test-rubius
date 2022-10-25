import { createSlice } from '@reduxjs/toolkit';
import users from '../source-data/users.json';

const initialState = {
    users: structuredClone(users.users),
    usersOnDelete: []
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
      if(action.payload !== 'no'){
        state.users = state.users.filter((el) => {
          if(el.id !== action.payload){
            return el;
          }
        });
      }else{
        state.users = state.users.filter((el) => {
          let findEl = state.usersOnDelete.filter((e) => e === el.id)
          if(el.id !== findEl[0]){
            return el;
          }
        });
      }
      
    },
    addUsersOnDelete: (state, action) => {
      debugger
      console.log(state.usersOnDelete)
      debugger
      state.usersOnDelete = [...state.usersOnDelete, action.payload]
    },
    reserUsersOnDelete: (state) => {
      state.usersOnDelete = []
    }
  },
});

export const { addPersoneAC, changeParsoneAC, deletePersoneAC, addUsersOnDelete, reserUsersOnDelete } = userSlice.actions;

export default userSlice.reducer;