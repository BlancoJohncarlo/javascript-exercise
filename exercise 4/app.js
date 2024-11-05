// Function to validate hero's identity
function validateHeroIdentity(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    const heroName = document.getElementById('heroName').value;
    const secretCode = document.getElementById('secretCode').value;
    const superpower = document.getElementById('superpower').value;
    const message = document.getElementById('message');
  
    // Check if all fields are filled
    if (heroName && secretCode && superpower) {
      message.textContent = "Welcome, hero! You may enter the secret base.";
      message.style.color = "green"; // Change text color to green for success
    } else {
      message.textContent = "Error! Please complete your hero profile before entering.";
      message.style.color = "red"; // Change text color to red for error
    }
  }
  
  // Add event listener to the form
  document.getElementById('heroForm').addEventListener('submit', validateHeroIdentity);
  