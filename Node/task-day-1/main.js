console.log(process.argv);
const index = require("./index");

let students = [
    {
        name: "Anas",
        grade: 90,
    },
    {
        name: "Omar",
        grade: 96,
    },
];

function addStudent(data) {
    students.push(data);
    console.log(students);
}
function listStudent() {
    console.log(students);
}
function editStudent(id, changeName, changeGrade) {
    students[id].name = changeName;
    students[id].grade = changeGrade;
    console.log(students);
}
function deleteStudent(id) {
    students.splice(id, 1);
}
function gradesSum() {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    console.log(sum);
}

switch (process.argv[2]) {
    case "add":
        addStudent({ name: process.argv[3], grade: parseInt(process.argv[4]) });
        break;
    case "list":
        listStudent();
        break;
    case "edit":
        editStudent(process.argv[3], process.argv[4], process.argv[5]);
        break;
    case "delete":
        deleteStudent(process.argv[3]);
        break;
    case "sum":
        gradesSum();
        break;
}

// if (process.argv[2] == "add") {
//     addStudent({ name: process.argv[3], grade: process.argv[4] });
// }
