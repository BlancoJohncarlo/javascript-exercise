// Select the paragraph and button elements
const spellText = document.getElementById('spell-text');
const castSpellButton = document.getElementById('cast-spell');

// Function to change the spell text
function castSpell() {
  spellText.textContent = "Hocus Pocus! The spell has been cast!";
}

// Add event listener to the button
castSpellButton.addEventListener('click', castSpell);
