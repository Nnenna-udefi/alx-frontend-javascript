const updateStudentGradeByCity = (students, city, newGrades) => {
  const gradedStudents = students.filter((student) => student.location === city)
    .map((student) => {
      // find grade object for the student
      const grades = newGrades.find((grade) => grade.studentId === student.id);

      if (grades) {
      // if grade object is found update students grade
        return { ...student, grade: grades.grade };
      }
      return { ...student, grade: 'N/A' };
    });

  return gradedStudents;
};

export default updateStudentGradeByCity;
