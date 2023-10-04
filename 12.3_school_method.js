const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};


function findPerson(techerOrStudent, id){
    let teachersOrStudents= [];
    let techerId = school.teachers.forEach(element => {
        if(element.name == techerOrStudent && element.id == id){
            teachersOrStudents.push(element)
        } 
    }) 
    let studentId =school.students.forEach(element => {
        if(element.name === techerOrStudent && element.id === id){
            teachersOrStudents.push(element)
        }
    })
    return teachersOrStudents
}

//console.log(findPerson("Houston", 13))

function assignStudent(studentId, subject){
    const teacher = school.teachers.find(teacher => 
        teacher.subjects.includes(subject) && teacher.capacityLeft > 0
    );

    if (teacher) {
        const student = school.students.find(student => student.id === studentId);

        if (student) {
            teacher.students.push(student);
            teacher.capacityLeft--;

            console.log(`Student '${student.name}' assigned to '${teacher.name}' for '${subject}'`);
        } else {
            console.log(`Student with ID '${studentId}' not found.`);
        }
    } else {
        console.log(`Sorry, no available teachers left for '${subject}'`);
    }
}

//assignStudent(11, "chemistry")

//console.log(school.teachers[0].students);

function assignTeachersSubject(teacherId, newSubject){
    let findSubject = school.teachers.forEach(techer => {
        if(techer.id === teacherId && !techer.subjects.includes(newSubject)){
            techer.subjects.push(newSubject)
        }
    })
    return school.teachers
}

console.log(assignTeachersSubject(2, 'Math'))