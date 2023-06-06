import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './Greeting/GreetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
