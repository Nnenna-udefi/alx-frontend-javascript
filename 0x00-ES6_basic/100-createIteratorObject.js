/* eslint-disable */
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  return {
    * [Symbol.iterator]() {
      for (const departmentName in allEmployees) {
        const employeesInDepartment = allEmployees[departmentName];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    },
  };
}
