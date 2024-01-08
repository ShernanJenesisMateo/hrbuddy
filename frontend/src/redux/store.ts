import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import employeeSaga from './employeeSaga';
import employeeReducer from './employeeState'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    employees : employeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(employeeSaga);

export type RootState = ReturnType<typeof store.getState>;
