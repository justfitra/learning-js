function scoringSystem(students) {
  let passedStudents = "";
  let total = 0;
  let highestScore = 0;
  let highestScoreName = "";
  let aboveAverage = "";
  for (let i = 0; i < students.length; i++) {
    total += students[i].grade;
  }
  let averrage = total / students.length;
  for (let i = 0; i < students.length; i++) {
    if (highestScore < students[i].grade) {
      highestScore = students[i].grade;
      highestScoreName = students[i].name;
    }
    if (students[i].grade > averrage) {
      aboveAverage += students[i].name + " ";
    }
    if (students[i].grade >= averrage) {
      passedStudents += students[i].name + " ";
    }
  }
  return [
    "Rata rata nilai siswa : " + averrage,
    "Siswa dengan nilai tertinggi : " +
      highestScoreName +
      " dengan nilai " +
      highestScore,
    "Siswa yang nilai lebih dari rata-rata : " + aboveAverage,
    "Siswa yang dinyatakan lulus : " + passedStudents,
  ];
}

let students = [
  { name: "John", grade: 84 },
  { name: "Jane", grade: 90 },
  { name: "Bob", grade: 78 },
  { name: "Alice", grade: 92 },
  { name: "Charlie", grade: 76 },
];

console.log(scoringSystem(students));
