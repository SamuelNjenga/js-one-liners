// MERGE ARRAYS
const languages = ["Python", "JavaScript", "Java", "C++", "Golang"];
const frameworks = ["Spring Boot", "Express", "Django", "Flask", "Angular"];

const merge = [...languages, ...frameworks];

console.log(merge);

const list_one = [1, 2, 3, 5];
const list_two = [11, 20, 3, 65];

const list_three = [...new Set([...list_one, ...list_two])];
console.log(list_three);
