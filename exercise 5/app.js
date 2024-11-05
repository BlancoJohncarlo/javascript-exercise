// Define the crew array with crew member objects
const crew = [
    { name: "Zorg", species: "Martian" },
    { name: "Luna", species: "Lunarian" },
    { name: "Blorp", species: "Jupiterian" }
  ];
  
  // Function to display crew members in the table
  function displayCrew() {
    const tableBody = document.querySelector("#crewTable tbody");
    crew.forEach(member => {
      const row = document.createElement("tr");
      
      // Create and populate table cells
      const nameCell = document.createElement("td");
      nameCell.textContent = member.name;
      const speciesCell = document.createElement("td");
      speciesCell.textContent = member.species;
      
      // Append cells to the row, and the row to the table body
      row.appendChild(nameCell);
      row.appendChild(speciesCell);
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to display crew members on page load
  displayCrew();
  