interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'MajorCredits'}
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'MinorCredits'}
}

const subject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const subject2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const totalMajorCredits = sumMajorCredits(subject1, subject2);
console.log("Total Major Credits:", totalMajorCredits.credits);

const subject3: MinorCredits = { credits: 2, brand: "MinorCredits" };
const subject4: MinorCredits = { credits: 1, brand: "MinorCredits" };
const totalMinorCredits = sumMinorCredits(subject3, subject4);
console.log("Total Minor Credits:", totalMinorCredits.credits);