// Exercise 1: Magic Spell Caster
function castSpell() {
    document.getElementById("spell-text").textContent = "Hocus Pocus! The spell has been cast!";
  }
  
  // Exercise 2: Fruit Collector Game
  const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍊 Orange"];
  function collectFruits() {
    const fruitBasket = document.getElementById("fruitBasket");
    fruitBasket.innerHTML = ""; // Clear basket first
    fruits.forEach(fruit => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      fruitBasket.appendChild(listItem);
    });
  }
  
  // Exercise 3: Magic Box Color Toggle
  const magicColors = { blue: "#1f4068", green: "#28a745" };
  let isBlue = true;
  function toggleMagicBoxColor() {
    const magicBox = document.getElementById("magicBox");
    magicBox.style.backgroundColor = isBlue ? magicColors.green : magicColors.blue;
    isBlue = !isBlue;
  }
  
  // Exercise 4: Hero Identity Check
  function validateHeroIdentity(event) {
    event.preventDefault();
    const name = document.getElementById("heroName").value;
    const code = document.getElementById("secretCode").value;
    const power = document.getElementById("superpower").value;
    const message = document.getElementById("heroMessage");
  
    if (name && code && power) {
      message.textContent = "Welcome, hero! You may enter the secret base.";
      message.style.color = "green";
    } else {
      message.textContent = "Error! Please complete your hero profile before entering.";
      message.style.color = "red";
    }
  }
  
  // Exercise 5: Galactic Crew Table
  const crew = [
    { name: "Zorg", species: "Martian" },
    { name: "Luna", species: "Lunarian" },
    { name: "Blorp", species: "Jupiterian" }
  ];
  function displayCrew() {
    const tableBody = document.querySelector("#crewTable tbody");
    crew.forEach(member => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${member.name}</td><td>${member.species}</td>`;
      tableBody.appendChild(row);
    });
  }
  // Call the function to display crew members on page load
  displayCrew();
  