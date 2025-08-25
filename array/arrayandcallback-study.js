const employeeSalary = (employees, callback) => {
  let result = [];
  let totalSalary = 0;
  let average = 0;
  let tax = 0.1;
  let totalTax = 0;
  let totalTaxDeducted = 0;
  let salaryTaxFilter = [];
  let salaryNoTaxFilter = [];
  let totalPeformance = 0;
  let performanceAverage = 0;
  let performanceAboveAverageFilter = [];
  let nameSalaryTax = "";
  let nameSalaryNoTax = "";
  let namePeformanceAboveAverage = "";

  employees.forEach((element) => {
    let salary = element.salary;
    let performance = element.performance;
    totalSalary += salary;
    totalPeformance += performance;
  });

  average = totalSalary / employees.length;
  performanceAverage = totalPeformance / employees.length;
  totalTax = average * tax;
  totalTaxDeducted = totalTax * employees.length;

  performanceAboveAverageFilter = employees.filter(
    (employee) => employee.performance > performanceAverage
  );
  salaryTaxFilter = employees.filter((employee) => employee.salary > 7000000);
  salaryNoTaxFilter = employees.filter(
    (employee) => employee.salary <= 7000000
  );
  performanceAboveAverageFilter.forEach((item) => {
    namePeformanceAboveAverage += item.name + " ";
  });
  salaryTaxFilter.forEach((item) => {
    nameSalaryTax += item.name + " ";
  });
  salaryNoTaxFilter.forEach((item) => {
    nameSalaryNoTax += item.name + " ";
  });

  result = [
    "Total gaji perusahaan : " + totalSalary,
    "Total pajak di putong : " + totalTax,
    "Total karyawan dengan gaji > 7 juta : " + nameSalaryTax,
    "Total karyawan dengan gaji <= 7 juta : " + nameSalaryNoTax,
    "Total karyawan dengan performance di atas rata-rata : " +
      performanceAverage,
    "Karyawan diatas rata-rata : " + namePeformanceAboveAverage,
  ];
  callback(result);
  return result;
};

const employees = [
  { name: "Andi", salary: 8000000, performance: 88 },
  { name: "Budi", salary: 6500000, performance: 72 },
  { name: "Citra", salary: 7200000, performance: 90 },
  { name: "Dewi", salary: 9500000, performance: 81 },
  { name: "Eka", salary: 6000000, performance: 70 },
];

employeeSalary(employees, (result) => console.log(result));
