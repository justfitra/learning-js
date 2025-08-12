const student = {
  name: "Fitra Maulana",
  nim: 12342,
  value: [80, 90, 78, 65, 99],
  average: 0,

  addValue(...newValue) {
    return this.value.push(...newValue);
  },

  averageCalculate() {
    const average = this.value.reduce((a, b) => a + b, 0) / this.value.length;

    return (this.average = average.toFixed(1));
  },

  profilePrint() {
    console.log(`Halo, saya ${this.name} dengan NIM ${this.nim}. Rata-rata nilai saya adalah ${this.average}
`);
  },
};

const student2 = {
  name: "Fitra",
  nim: 12382,
  value: [80, 90, 78, 65, 99],
  average: 0,

  addValue(...newValue) {
    return this.value.push(...newValue);
  },

  averageCalculate() {
    const average = this.value.reduce((a, b) => a + b, 0) / this.value.length;

    return (this.average = average.toFixed(1));
  },

  profilePrint() {
    console.log(`Halo, saya ${this.name} dengan NIM ${this.nim}. Rata-rata nilai saya adalah ${this.average}
`);
  },
};

student.addValue(85, 90);
student.averageCalculate();
console.log(student.value.length);
student.profilePrint();

const manageStudentValue = (...students) => {
  const studentValue = students.map((student) =>
    student.value.map((value) => value + 100)
  );

  const changeName = students.map((student) => {
    const updateName = { ...student, name: "salinan darinama " + student.name };

    return updateName;
  });

  const putNameAndAverage = students.map((student) => {
    const { name, nim, value } = student;
    const average = value.reduce((acc, curr) => acc + curr, 0) / value.length;

    const result = `mahasiswa ${name} memiliki rata rata ${average.toFixed(1)}`;

    return result;
  });

  return { studentValue, changeName, putNameAndAverage };
};

console.log(manageStudentValue(student, student2));
