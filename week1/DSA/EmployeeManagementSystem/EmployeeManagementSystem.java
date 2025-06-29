public class EmployeeManagementSystem {

    public static class Employee {
        int employeeId;
        String name;
        String position;
        double salary;

        public Employee(int employeeId, String name, String position, double salary) {
            this.employeeId = employeeId;
            this.name = name;
            this.position = position;
            this.salary = salary;
        }

        @Override
        public String toString() {
            return employeeId + " - " + name + " | " + position + " | Salary: " + salary;
        }
    }

    private static final int MAX_EMPLOYEES = 100;
    private static final Employee[] employees = new Employee[MAX_EMPLOYEES];
    private static int count = 0;

    public static void addEmployee(Employee emp) {
        if (count < MAX_EMPLOYEES) {
            employees[count++] = emp;
            System.out.println("Employee added.");
        } else {
            System.out.println("Employee list full.");
        }
    }

    public static void searchEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                System.out.println("Found: " + employees[i]);
                return;
            }
        }
        System.out.println("Employee not found.");
    }

    public static void deleteEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }
                employees[--count] = null;
                System.out.println("Employee deleted.");
                return;
            }
        }
        System.out.println("Employee not found.");
    }

    public static void listEmployees() {
        if (count == 0) {
            System.out.println("No employees to show.");
        } else {
            for (int i = 0; i < count; i++) {
                System.out.println(employees[i]);
            }
        }
    }

    public static void main(String[] args) {
        addEmployee(new Employee(1, "Harish", "Software Engineer", 65000));
        addEmployee(new Employee(2, "Sanjay", "Project Manager", 90000));
        addEmployee(new Employee(3, "Shanush", "Analyst", 55000));

        System.out.println("\nAll Employees:");
        listEmployees();

        System.out.println("\nSearching for Employee with ID 2:");
        searchEmployee(2);

        System.out.println("\nDeleting Employee with ID 1:");
        deleteEmployee(1);

        System.out.println("\nEmployees After Deletion:");
        listEmployees();
    }
}
