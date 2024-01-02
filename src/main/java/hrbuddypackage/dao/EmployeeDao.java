package hrbuddypackage.dao;

import java.util.List;

import hrbuddypackage.model.EmployeeModel;

public interface EmployeeDao {

    List<EmployeeModel> getAllEmployeeById();

    EmployeeModel getEmployeeById();
    
}
