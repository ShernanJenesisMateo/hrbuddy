package hrbuddypackage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hrbuddypackage.model.EmployeeModel;
import hrbuddypackage.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all")
    public List<EmployeeModel> getAllEmployees() {
        return employeeService.employeeList();
    }

    @GetMapping("/{employee_id}")
    public EmployeeModel getEmployeeById(@PathVariable("employee_id") Long employee_id) {
        return employeeService.employee(employee_id);
    }

}
