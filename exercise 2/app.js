// Array of fruits for the Fruit Collector Game
const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍊 Orange"];

// Function to collect fruits and display them in the basket
function collectFruits() {
  const fruitBasket = document.getElementById('fruitBasket');
  
  // Clear the basket before adding fruits (optional)
  fruitBasket.innerHTML = '';

  // Loop through each fruit and add it to the basket as an <li> item
  fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    fruitBasket.appendChild(listItem);
  });
}

// Event listener for the "Collect Fruits" button
document.getElementById('collectButton').addEventListener('click', collectFruits);
