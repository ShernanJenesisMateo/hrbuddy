package hrbuddypackage.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hrbuddypackage.dao.EmployeeDao;
import hrbuddypackage.model.EmployeeModel;
import hrbuddypackage.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    @Override
    public List<EmployeeModel> employeeList() {
        return employeeDao.getAllEmployee();
    }

    @Override
    public EmployeeModel employee(Long employee_id) {
        return employeeDao.getEmployeeById(employee_id);
    }

}
