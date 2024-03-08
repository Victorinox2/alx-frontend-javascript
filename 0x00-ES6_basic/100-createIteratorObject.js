export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employeesInCurrentDepartment = allEmployees[currentDepartment];

        if (currentEmployeeIndex < employeesInCurrentDepartment.length) {
          const currentEmployee = employeesInCurrentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: currentEmployee, done: false };
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next();  // Recursive call for the next department
        }
      } else {
        return { done: true };
      }
    }
  };
}
