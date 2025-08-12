/* Tugasmu:

Gunakan destructuring untuk mengambil nilai "Apple" ke dalam variabel firstFruit.

Ambil "Mango" ke dalam variabel thirdFruit.*/

const fruits = ["apple", "banana", "mango"];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit, "and", thirdFruit);
/*
Tugasmu:

Gunakan destructuring untuk mengambil:

Nama ke variabel studentName

Level programming ke variabel programmingSkill
*/

const student = {
  name: "Fitra",
  age: 18,
  skills: {
    programming: "Intermediate",
    design: "Beginner",
  },
};

const { name: studentName, age: studentAge, skills: studentSkills } = student;
const { programming: programmingSkill, design: designSkill } = studentSkills;

console.log(
  "student name : " +
    studentName +
    " " +
    "programming skill : " +
    programmingSkill
);

/*  
Tugasmu:

Gunakan destructuring untuk mengambil:

Nama user pertama ke variabel firstName

Email user kedua ke variabel secondEmail


*/

const users = [
  {
    name: "Andi",
    contact: {
      email: "andi@example.com",
      phone: "08123456789",
    },
  },
  {
    name: "Budi",
    contact: {
      email: "budi@example.com",
      phone: "08987654321",
    },
  },
];

const [andi, budi] = users;
const { name: firstName, contact: firstContact } = andi;
const { email: fristEmail, phone: firstPhone } = firstContact;

const { name: secondName, contact: secondContact } = budi;
const { email: secondEmail, phone: secondPhone } = secondContact;

console.log(
  `nama user pertama adalah ${firstName} , email user kedua adalah ${secondEmail}`
);
