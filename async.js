const studentDatabase = [
    {
        id: 1,
        firstName: "Thabo",
        lastName: "Thiza",
        email: "Thabo@gmail.com",
        course: "JavaScript",
        age: 21
    },
    {
        id: 2,
        firstName: "Thapelo",
        lastName: "Typlo",
        email: "Thapelo@gmail.com",
        course: "Web Development",
        age: 22
    },
    {
        id: 3,
        firstName: "Siphiwe",
        lastName: "Spitjo",
        email: "Siphiwe@gmail.com",
        course: "Software Engineering",
        age: 20
    },
    {
        id: 4,
        firstName: "Nhlanhla",
        lastName: "Nhlax",
        email: "Nhlanhla@gmail.com",
        course: "Data Science",
        age: 23
    },
    {
        id: 5,
        firstName: "Barman",
        lastName: "Teboho",
        email: "Barman@gmail.com",
        course: "Cyber Security",
        age: 24
    }
];

function synchronousExecution() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The process is in action");
    console.log("Step-3 - The function reached the final stage");
}

synchronousExecution();

// Question 2
function displayStudents() {
    setTimeout(() => {
        console.log("Student Records:");

        studentDatabase.forEach(student => {
            console.log(student);
        });

    }, 3000);
}

displayStudents();
