// Code to test connection to HTML file
console.log('Hello');

// Function to create light/dark mode toggle

let modeButton = document.getElementById('dark-mode-button');

modeButton.addEventListener('click', function () {

  document.body.classList.toggle('dark-mode');

  let darkElements = document.querySelectorAll('.dark-element');
  darkElements.forEach(function (darkElement) {
    darkElement.classList.toggle('dark-mode-element')
  });

  let darkCards = document.querySelectorAll('.dark-card');
  darkCards.forEach(function (darkCard) {
    darkCard.classList.toggle('dark-mode-card')
  });

});

