export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const arrayId = arr.map(student => student.id);

  return arrayId;
}
