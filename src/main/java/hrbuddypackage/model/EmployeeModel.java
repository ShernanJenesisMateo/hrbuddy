package hrbuddypackage.model;

import lombok.Data;

@Data
public class EmployeeModel {
    private Long employee_id;
    private String employee_firstname;
    private String employee_lastname;
    private Long employee_age;
}
