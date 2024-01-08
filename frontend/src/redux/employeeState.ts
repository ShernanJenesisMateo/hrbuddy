import { createSlice } from "@reduxjs/toolkit";

export interface EmployeeModel {
  employee_id: number;
  employee_firstname: string;
  employee_lastname: string;
  employee_age: number;
}

export interface EmployeeState {
  employees: EmployeeModel[];
  isLoading: boolean;
}

const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
};

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    getEmployeesFetch: (state) => {
      state.isLoading = true;
    },
    getEmployeesSuccess: (state, action) => {
      state.employees = action.payload;
      state.isLoading = false;
    },
    getEmployeesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getEmployeesFetch,
  getEmployeesSuccess,
  getEmployeesFailure,
} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
