function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }
  const sum = this.grades.reduce((total, grade) => total + grade, 0);
  return sum / this.grades.length;
};

const collin = new Student("Collin", "Arnold");
const john = new Student("John", "Smith");

collin.inputNewGrade(90);
collin.inputNewGrade(85);
collin.inputNewGrade(78);

john.inputNewGrade(95);
john.inputNewGrade(88);
john.inputNewGrade(92);

console.log(
  `${collin.firstName} ${
    collin.lastName
  }'s Average Grade: ${collin.computeAverage()}`
);
console.log(
  `${john.firstName} ${
    john.lastName
  }'s Average Grade: ${john.computeAverage()}`
);
