import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

export const cpp = 'Cpp Subjects';
export const java = 'Java Subjects';
export const react = 'React Subjects';

export const cTeacher: Teacher = {
    firstName: 'Nene',
    lastName: 'Oku',
    experienceTeachingC: 10,
}

function logSubject(subject: string, teacher: Teacher, subjectObj: any) {
    console.log(subject);
    console.log('Teacher:', teacher);
    console.log('Requirements:', subjectObj.getRequirements());
    console.log('Available Teacher:', subjectObj.getAvailableTeacher());
}

// For Cpp subject
const cppSubject = new Cpp();
cppSubject.setTeacher(cTeacher);
logSubject(cpp, cTeacher, cppSubject);

// For Java subject
const javaSubject = new Java();
javaSubject.setTeacher(cTeacher);
logSubject(java, cTeacher, javaSubject);

// For React subject
const reactSubject = new React();
reactSubject.setTeacher(cTeacher);
logSubject(react, cTeacher, reactSubject);
