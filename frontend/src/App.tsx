import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store'; 

import { getEmployeesFetch } from './redux/employeeState';

function App() {
  const employees = useSelector((state: RootState) => state.employees.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesFetch());
  }, [dispatch]);

  console.log(employees);

  return (
    <div className="App">
      <div>
        <h1>MY CATS</h1>
        <div>
          {employees.map( employee =>
            <div key={employee.employee_id} className="row">
              <div className='col-left'>
                  <h2>{employee.employee_age}</h2>
                  <h2>{employee.employee_firstname}</h2>
                  <h2>{employee.employee_lastname}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
