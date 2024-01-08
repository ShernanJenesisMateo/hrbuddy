import { call, put, takeEvery } from 'redux-saga/effects';
import { getEmployeesSuccess } from './employeeState';
import axios from "axios";

function* workGetEmployeesFetch(): Generator<any, void, any> { 
  try {
    const employees = yield call(() => axios.get("http://localhost:8080/employee/all").then((res) => res.data));
    yield put(getEmployeesSuccess(employees));
  } catch (error) {
    console.log("This is the error ----- " + error)
  }
}

function* employeeSaga(): Generator {
  yield takeEvery('employee/getEmployeesFetch', workGetEmployeesFetch);
}

export default employeeSaga;
