import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';
import organisationReducer from './organisations';
import appReducer from './appState';

export const store = configureStore({
    reducer: {
        users: userReducer,
        organisations: organisationReducer,
        appState: appReducer,
    },
})