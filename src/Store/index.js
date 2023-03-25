import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Reducers';

const store = configureStore({
    reducer: {
      user: userReducer,
    }
});

export default store;