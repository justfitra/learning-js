const studentValueManagement = (students, callback) => {
  const studentNiceValue = students.filter((student) => student.nilai > 80);

  const studentName = studentNiceValue.map((student) => student.nama);

  const averageValue =
    students.reduce((arr, student) => arr + student.nilai, 0) / students.length;

  const result = [studentNiceValue, studentName, averageValue];
  callback(result);
  return result;
};

const newStudents = [
  { nama: "Fajar", nilai: 88, kelas: "12 IPA 2" },
  { nama: "Gita", nilai: 91, kelas: "12 IPA 1" },
];
const students = [
  ...newStudents,
  { nama: "Andi", nilai: 85, kelas: "12 IPA 1" },
  { nama: "Budi", nilai: 92, kelas: "12 IPA 1" },
  { nama: "Citra", nilai: 77, kelas: "12 IPA 2" },
  { nama: "Dewi", nilai: 66, kelas: "12 IPA 2" },
  { nama: "Eka", nilai: 95, kelas: "12 IPA 1" },
];

studentValueManagement(students, (result) =>
  result.map((res) => console.log(res))
);
