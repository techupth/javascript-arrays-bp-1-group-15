// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1];
let alexHobbies = employees[1].hobbies.push("Watching basketball");
let alexAndJamesAge = employees[0].age + employees[1].age;
const updateEmployees = employees;
updateEmployees[0] = {"name": "Alicia", "age": 29, "hobbies": ["Shopping", "Reading novels"]};
updateEmployees[1] = {"name": "Kody", "age": 19, "hobbies": ["Computer games", "Wakeboard"]};
console.log(updateEmployees);
updateEmployees.pop();
console.log(employees, updateEmployees);