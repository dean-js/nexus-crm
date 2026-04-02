// Initial Database : is an array of customer objects, each with properties: id (customer number), name, age, city, and isPremium (Gold silver bronze member).
const customers = [
  { id: 1, name: "Dean", age: 25, city: "Bradford", isPremium: "Gold" },
  { id: 2, name: "Barry", age: 47, city: "Huddersfield", isPremium: "Bronze" },
  { id: 3, name: "Jaydon", age: 23, city: "Leeds", isPremium: "Silver" },
  { id: 4, name: "Dominic", age: 25, city: "Newcastle", isPremium: "Gold" },
];

// Verify the data is loaded
console.log("Database Loaded:", customers);

// Get the container element where we will display the customers

const container = document.getElementById("customer-container");

customers.forEach((customer) => {
  // 1. Creates a new div for this customer
  const card = document.createElement("div");

  // 2. Give it the CSS class we just made
  card.classList.add("customer-card");

  // 3. Put the data inside
  card.innerHTML = `
        <h3>${customer.name}</h3>
        <p>City: ${customer.city}</p>
        <p>Tier: ${customer.isPremium}</p>
    `;

  // 4. Add it to the page
  container.appendChild(card);
});
