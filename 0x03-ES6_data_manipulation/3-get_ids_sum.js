export default function getStudentIdsSum(students) {
  const idSum = students.reduce((acc, student) => acc + student.id, 0);

  return idSum;
}
