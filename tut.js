//Question 1

let array = [1,2,3,4,5,6,7,8,9,10];

const arraySquare = array.map((e)=>{
    return e*e;
})
console.log(`Squared array is ${arraySquare}\n
    `);


//Question 2

const students = [
    {
        name: "John Doe",
        age: 20,
        major: "Computer Science",
        year: "Sophomore",
        totalMarks: 85
    },
    {
        name: "Jane Smith",
        age: 21,
        major: "Information Technology",
        year: "Junior",
        totalMarks: 90
    },
    {
        name: "Alice Johnson",
        age: 22,
        major: "Software Engineering",
        year: "Senior",
        totalMarks: 95
    },
    {
        name: "Michael Brown",
        age: 19,
        major: "Data Science",
        year: "Freshman",
        totalMarks: 80
    },
    {
        name: "Emily Davis",
        age: 20,
        major: "Cybersecurity",
        year: "Sophomore",
        totalMarks: 88
    },
    {
        name: "Daniel Wilson",
        age: 21,
        major: "Computer Science",
        year: "Junior",
        totalMarks: 78
    },
    {
        name: "Sarah Garcia",
        age: 22,
        major: "Software Engineering",
        year: "Senior",
        totalMarks: 89
    },
    {
        name: "David Martinez",
        age: 19,
        major: "Information Technology",
        year: "Freshman",
        totalMarks: 82
    },
    {
        name: "Laura Rodriguez",
        age: 20,
        major: "Data Science",
        year: "Sophomore",
        totalMarks: 90
    },
    {
        name: "James Lee",
        age: 21,
        major: "Cybersecurity",
        year: "Junior",
        totalMarks: 92
    }
];


console.log("Student grades\n\n");
students.forEach((e)=>{
     const grade = e.totalMarks > 90 ? "A" :
     e.totalMarks > 80 ? "B" :
     e.totalMarks > 70 ? "C" :
     e.totalMarks > 60 ? "D" :
     e.totalMarks > 50 ? "E" :
     "F";
     
     console.log(`Grade of ${e.name} is ${grade}`);
     
});



//Question 3

console.log("\n\nCar Details");



const car = {
    companyName: "Toyota",
    model: "Corolla",
    year: 2019,
    color: "Silver"
};

console.log(car);
console.log("\nUpdated car details\n\n");
const changeCarYear = (carObj, newYear) => {
    carObj.year = newYear;
};


const printCarDetails = (carObj) => {
    const { model, year } = carObj;
    console.log(`Car Model: ${model}`);
    console.log(`Car Year: ${year}`);
};


changeCarYear(car, 2024);

printCarDetails(car);

//Question 4

const prime = (num)=>{
    if(num <=1) return false;
    for (let i=2 ; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
};
console.log("\n\n");
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
console.log(`Number array = ${num}`);
console.log("\n\n");
console.log(`Array of prime numbers \n`)
const primeNumbers = num.filter(prime);

console.log(primeNumbers);

//Question 5

console.log("\n\n");
console.log("Use Cases");
console.log("Map = Apply a function to every element: Modify or compute something for each element of the array.\n Extract properties from objects: Create a new array based on a property from an object array \nPerform mathematical operations: Add, subtract, or perform any other operation on array elements.");
console.log("Filter = Filter based on a condition: Create a new array with elements that satisfy a condition.\nRemove invalid entries: Filter out null, undefined, or other falsy values from an array\nFilter objects by properties: Select objects that meet specific criteria");
console.log("Reduce = Sum or multiply array elements: Accumulate all elements to a single value (e.g., total, product)\n Find the maximum or minimum: Determine the largest or smallest value in an array\n Count occurrences: Count how often each item appears in an array \nFlatten an array: Reduce a multi-dimensional array to a single-dimensional array.");
console.log("\n\n");

//Question 6

console.log("asynchronous function using async-await\n\n")
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();


//Question 7

const person = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    contact: {
        phone: "123-456-7890",
        email: "john.doe@example.com"
    }
};

const phoneNumber = person.contact?.phone;

console.log(phoneNumber);
