interface Student {
  firstName: string;
  lastName: string;
  age: string;
  location: string;
}

const student1: Student = {
  firstName: Joshua,
  lastName: Oko,
  age: 28,
  location: Enugu,
};

const student2: Student = {
  firstName: Nene,
  lastName: Ude,
  age: 26,
  location: Lagos,
};

const studentsList: Array<Student> = [ student1, student2 ];

// render a table using vanilla javascript
document.addEventListener
