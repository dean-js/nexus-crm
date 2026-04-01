// Initial Database : is an array of customer objects, each with properties: id (customer number), name, age, city, and isPremium (Gold silver bronze member). 
const customers = [
    { id: 1, name: "Dean", age: 25, city: "Bradford", isPremium: "Gold" },
    { id: 2, name: "Barry", age: 47, city: "Huddersfield", isPremium: "Bronze" },
    { id: 3, name: "Jaydon", age: 23, city: "Leeds", isPremium: "Silver" },
    { id: 4, name: "Dominic", age: 25, city: "Newcastle", isPremium: "Gold" }
];

// Verify the data is loaded
console.log("Database Loaded:", customers);