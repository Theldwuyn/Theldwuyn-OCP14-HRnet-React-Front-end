import { configureStore } from '@reduxjs/toolkit';
import createEmployeeReducer from '../features/createEmployeeForm/createEmployeeFormSlice.js';

export const store = configureStore({
  reducer: {
    employeeList: createEmployeeReducer,
  },
});
