// 1. Initial Database (Array of Objects)
const customers = [
    { id: 1, name: "Dean", age: 25, city: "Bradford", isPremium: "Gold" },
    { id: 2, name: "Barry", age: 47, city: "Huddersfield", isPremium: "Bronze" },
    { id: 3, name: "Jaydon", age: 23, city: "Leeds", isPremium: "Silver" },
    { id: 4, name: "Dominic", age: 25, city: "Newcastle", isPremium: "Gold" }
];

// 2. Selectors (Grabbing the empty div from HTML)
const container = document.getElementById('customer-container');

// 3. The "Render" Function (Draws the cards on the screen)
const displayCustomers = () => {
    // Clear the container so we don't get duplicates
    container.innerHTML = ""; 

    customers.forEach(customer => {
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('customer-card');

        // Add the specific Tier class for CSS styling
        const tierClass = `tier-${customer.isPremium.toLowerCase()}`;
        card.classList.add(tierClass);

        // Fill the card with HTML
        card.innerHTML = `
            <h3>${customer.name}</h3>
            <p>Location: ${customer.city}</p>
            <p>Status: <strong>${customer.isPremium}</strong></p>
            <button class="delete-btn" onclick="deleteCustomer(${customer.id})">Delete</button>
        `;

        // Push the card into the container
        container.appendChild(card);
    });
};

// 4. The "Add" Function (Runs when you click the 'Add Customer' button)
const addNewCustomer = () => {
    const nameInput = document.getElementById('newName');
    const cityInput = document.getElementById('newCity');
    const tierInput = document.getElementById('newTier');

    // Validation: Don't add empty customers
    if (nameInput.value === "" || cityInput.value === "") {
        alert("Please enter a name and city!");
        return;
    }

    // Create the new object
    const newCustomer = {
        id: Date.now(), // Uses the current timestamp as a unique ID
        name: nameInput.value,
        city: cityInput.value,
        isPremium: tierInput.value
    };

    // Add to our array and refresh the screen
    customers.push(newCustomer);
    displayCustomers();

    // Clear the input fields for the next entry
    nameInput.value = "";
    cityInput.value = "";
};

// 5. The "Delete" Function (Runs when a red delete button is clicked)
const deleteCustomer = (id) => {
    // Find the position of the customer with the matching ID
    const index = customers.findIndex(c => c.id === id);
    
    if (index !== -1) {
        customers.splice(index, 1); // Remove 1 item at that index
        displayCustomers(); // Refresh the screen
    }
};

// 6. INITIALIZE: Run this once so the page isn't blank on load!
displayCustomers();