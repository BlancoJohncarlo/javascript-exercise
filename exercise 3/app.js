
const magicColors = {
    blue: "#1f4068",    // Mystical Blue
    green: "#28a745"    // Enchanted Green
  };
  

  let isBlue = true;
  

  function toggleMagicColor() {
    const magicBox = document.getElementById('magicBox');
    if (isBlue) {
      magicBox.style.backgroundColor = magicColors.green;
    } else {
      magicBox.style.backgroundColor = magicColors.blue;
    }
    
    isBlue = !isBlue;
  }
  
  document.getElementById('magicButton').addEventListener('click', toggleMagicColor);
  