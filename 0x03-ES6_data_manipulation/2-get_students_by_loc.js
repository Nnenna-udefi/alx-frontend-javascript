export default function getStudentsByLocation(studentList, city) {
  const studentLocation = studentList.filter((student) => student.location === city);

  return studentLocation;
}
