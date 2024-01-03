package hrbuddypackage.service;

import java.util.List;

import hrbuddypackage.model.EmployeeModel;

public interface EmployeeService {

    public List<EmployeeModel> employeeList();
    public EmployeeModel employee(Long employee_id);

}
