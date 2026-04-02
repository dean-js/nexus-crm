// Initial Database : is an array of customer objects, each with properties: id (customer number), name, age, city, and isPremium (Gold silver bronze member).
const customers = [
  { id: 1, name: "Dean", age: 25, city: "Bradford", isPremium: "Gold" },
  { id: 2, name: "Barry", age: 47, city: "Huddersfield", isPremium: "Bronze" },
  { id: 3, name: "Jaydon", age: 23, city: "Leeds", isPremium: "Silver" },
  { id: 4, name: "Dominic", age: 25, city: "Newcastle", isPremium: "Gold" },
];

// Verify the data is loaded
console.log("Database Loaded:", customers);

const displayCustomers = () => {
  container.innerHTML = ""; // Clear screen

  customers.forEach((customer) => {
    const card = document.createElement("div");
    card.classList.add("customer-card");

    // Logic: Add a class based on the tier string
    // We use .toLowerCase() to make sure "Gold" or "gold" both work
    const tier = customer.isPremium.toLowerCase();

    if (tier === "gold") {
      card.classList.add("tier-gold");
    } else if (tier === "silver") {
      card.classList.add("tier-silver");
    } else if (tier === "bronze") {
      card.classList.add("tier-bronze");
    }

    card.innerHTML = `
            <h3>${customer.name}</h3>
            <p>Location: ${customer.city}</p>
            <p>Status: <strong>${customer.isPremium}</strong></p>
            <button class="delete-btn" onclick="deleteCustomer(${customer.id})">Delete</button>
        `;

    container.appendChild(card);
  });
};
const deleteCustomer = (id) => {
  // 1. Find the index of the customer with that ID
  const index = customers.findIndex((c) => c.id === id);

  // 2. Remove them from the array
  if (index !== -1) {
    customers.splice(index, 1);
  }

  // 3. Refresh should display customer informaation
  displayCustomers();
};
