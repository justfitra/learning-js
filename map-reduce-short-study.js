const analyzeEmployees = (employees, callback) => {
  let totalSalary = employeeSalary.reduce((acc, curr) => acc + curr.salary, 0);

  let averageAge =
    employees.reduce((acc, curr) => acc + curr.age, 0) / employees.length;

  let itDepartment = employees.filter(
    (employee) => employee.department === "IT"
  );
  let totalITDepartement = itDepartment.length;
  let hrDepartement = employees.filter(
    (employee) => employee.department === "HR"
  );
  let totalHRDepartement = hrDepartement.length;
  let financeDepartement = employees.filter(
    (employee) => employee.department === "finance"
  );
  let totalFinanceDepartement = financeDepartement.length;
  let goodPeformance = employees.filter(
    (employee) => employee.performance > 80
  );
  let employeeGoodPerformance = goodPeformance.map((x) => x.name);
  let salary = 0;
  let employeeGoodSalary = employees.map((x) =>
    x.salary > salary ? (salary = x.salary) : salary
  );
  let employeeHeigerSalary = employees.filter(
    (employee) => employee.salary >= salary
  );
  let nameEmployeeHeigerSalary = employeeHeigerSalary.map((name) => name.name);
  let employeeTax = employees.map((employee) => employee.salary * 0.1);
  let totalTax = employeeTax.reduce((acc, curr) => acc + curr, 0);

  let result = [
    "Total salary seluruh karyawan : " + totalSalary,
    "Rata-rata usia karyawan : " + averageAge,
    `Jumlah karyawan per department : IT : ${totalITDepartement} , HR : ${totalHRDepartement} , Finance : ${totalFinanceDepartement} `,
    `Karyawan yang memiliki performance lebih dari 80 : ${employeeGoodPerformance} `,
    "Karyawan dengan gaji tertinggi : " + nameEmployeeHeigerSalary,
    "Total pajak : " + totalTax,
  ];

  callback(result);
  return result;
};

const employees = [
  { name: "Andi", salary: 8000000, age: 25, department: "IT", performance: 88 },
  { name: "Budi", salary: 6000000, age: 30, department: "HR", performance: 79 },
  {
    name: "Citra",
    salary: 7500000,
    age: 28,
    department: "IT",
    performance: 92,
  },
  {
    name: "Dewi",
    salary: 5000000,
    age: 32,
    department: "Finance",
    performance: 65,
  },
  { name: "Eka", salary: 9000000, age: 27, department: "IT", performance: 85 },
];

analyzeEmployees(employees, (result) =>
  result.map((employee) => console.log(employee))
);

// Kode yang lebih rapih

// const analyzeEmployees = (employees, callback) => {
//   let totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
//   let averageAge =
//     employees.reduce((acc, curr) => acc + curr.age, 0) / employees.length;

//   let departmentCounts = {
//     IT: employees.filter((e) => e.department === "IT").length,
//     HR: employees.filter((e) => e.department === "HR").length,
//     Finance: employees.filter((e) => e.department === "Finance").length,
//   };

//   let goodPerformers = employees
//     .filter((e) => e.performance > 80)
//     .map((e) => e.name);

//   let maxSalary = Math.max(...employees.map((e) => e.salary));
//   let topEarners = employees
//     .filter((e) => e.salary === maxSalary)
//     .map((e) => e.name);

//   let totalTax = employees
//     .map((e) => e.salary * 0.1)
//     .reduce((acc, curr) => acc + curr, 0);

//   let result = [
//     `💼 Total gaji seluruh karyawan: Rp${totalSalary}`,
//     `👥 Rata-rata usia karyawan: ${averageAge.toFixed(1)} tahun`,
//     `🏢 Jumlah karyawan per department: IT: ${departmentCounts.IT}, HR: ${departmentCounts.HR}, Finance: ${departmentCounts.Finance}`,
//     `🏆 Karyawan dengan performance > 80: ${goodPerformers.join(", ")}`,
//     `💸 Karyawan dengan gaji tertinggi: ${topEarners.join(", ")}`,
//     `🧾 Total pajak perusahaan (10%/karyawan): Rp${totalTax}`,
//   ];

//   callback(result);
//   return result;
// };

// const employees = [
//   { name: "Andi", salary: 8000000, age: 25, department: "IT", performance: 88 },
//   { name: "Budi", salary: 6000000, age: 30, department: "HR", performance: 79 },
//   { name: "Citra", salary: 7500000, age: 28, department: "IT", performance: 92 },
//   { name: "Dewi", salary: 5000000, age: 32, department: "Finance", performance: 65 },
//   { name: "Eka", salary: 9000000, age: 27, department: "IT", performance: 85 },
// ];

// analyzeEmployees(employees, (result) =>
//   result.forEach((line) => console.log(line))
// );
