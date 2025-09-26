class User {
  #password;
  constructor(username, role, password) {
    this.username = username;
    this.role = role;
    this.#password = password;
  }

  checkPassword(inputPassword) {
    if (inputPassword.trim() !== this.#password) {
      throw new Error("Password not vailed");
    }
    console.log("Password Correct");
  }

  getRoleInfo() {
    if (this.role) return `Nama : ${this.username}, Role : ${this.role}`;
    else {
      throw new Error("Role Required");
    }
  }
}

class Student extends User {
  constructor(username, role, password) {
    super(username, role, password);
    this.enrolledCourses = [];
  }

  info() {
    console.log(
      `Mahasiswa ${this.getRoleInfo()}, mengikuti ${
        this.enrolledCourses.length
      } kursus`
    );
  }
}

class Instruktur extends User {
  constructor(username, role, password) {
    super(username, role, password);
    this.teachingCourses = [];
  }

  info() {
    console.log(
      `Mahasiswa ${this.getRoleInfo()}, megajar ${
        this.teachingCourses.length
      } kursus`
    );
  }
}

class Course {
  constructor(account, course) {
    this.account = account;
    this.course = course;
  }

  toString() {
    const insturktur = this.account.filter((res) => res.role === "instruktur");
    const student = this.account.filter((res) => res.role === "student");
    console.log(
      `Kursus ${this.course} Instruktur ${insturktur.username} Peserta: ${student.length}`
    );
  }

  static getPlatformName() {
    return "Fitra Academy";
  }
}

class CourseContent {
  constructor(title) {
    this.title = title;
  }
}

class VideoContent extends CourseContent {
  constructor(title) {
    super(title);
  }

  render() {
    console.log(`Menampilkan video: ${this.title}`);
  }
}

class QuizContent extends CourseContent {
  constructor(title) {
    super(title);
  }

  render() {
    console.log(`Menampilkan quiz: ${this.title}`);
  }
}
const user = new User();
const student = new Student("Fitra", "student", "sembarang");
const student2 = new Student("Maulana", "student", "sembarang");
const insturktur = new Instruktur("Andi", "instruktur", "sembarang");
const course = new Course([insturktur, student, student2], "JavaScript");
const course2 = new Course([insturktur, student], "Python");
const videoContent = new VideoContent("Intro Js");
const quizContent = new VideoContent("Quiz Variabel");
// const course3 = new Course(insturktur, "JavaScript");
console.log(Course.getPlatformName());

student.enrolledCourses.push(course);
student.enrolledCourses.push(course2);
insturktur.teachingCourses.push(course);
student.info();
insturktur.info();
course.toString();
videoContent.render();
quizContent.render();
