interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string; 
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string) => {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

// Type predicate function 
function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: TeacherInterface | DirectorInterface){
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
      } else {
        console.log(employee.workTeacherTasks());
      }
}

// string literal type named Subjects
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') return 'Teaching Math';
    else if (todayClass === 'History') return 'Teaching History';
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
executeWork(createEmployee('#500'));
console.log(teachClass('Math'));
console.log(teachClass('History'));