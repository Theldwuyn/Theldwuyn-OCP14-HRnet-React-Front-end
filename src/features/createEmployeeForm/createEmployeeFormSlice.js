import { createSlice } from '@reduxjs/toolkit';

const employeeList = [];

const createEmployeeFormSlice = createSlice({
  name: 'employeeList',
  initialState: employeeList,
  reducers: {
    addEmployee: (state, action) => {
      const employee = action.payload;
      return [...state, employee];
    },
  },
});

export const { addEmployee } = createEmployeeFormSlice.actions;

export default createEmployeeFormSlice.reducer;
