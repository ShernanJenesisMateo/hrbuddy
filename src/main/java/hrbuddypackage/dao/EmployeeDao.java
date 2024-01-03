package hrbuddypackage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import hrbuddypackage.model.EmployeeModel;

@Mapper
public interface EmployeeDao {

    List<EmployeeModel> getAllEmployee();

    EmployeeModel getEmployeeById(Long employee_id);
    
}
