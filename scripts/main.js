// Code to test connection to HTML file
console.log('Hello');

// Function to create light/dark mode toggle

const modeButton = document.getElementById('dark-mode-button');

modeButton.addEventListener('click', function () {

  document.body.classList.toggle('dark-mode');

  const darkElements = document.querySelectorAll('.dark-element');
  darkElements.forEach(function (darkElement) {
    darkElement.classList.toggle('dark-mode-element')
  });

  const darkCards = document.querySelectorAll('.dark-card');
  darkCards.forEach(function (darkCard) {
    darkCard.classList.toggle('dark-mode-card')
  });

});

// Function to create search functionality

// To test access to search button
const search = document.getElementById('search');
search.addEventListener('click', function () {
  console.log('Search button clicked');
});

// To click search button and access input values
search.addEventListener('click', function () {
  const categoryInput = document.getElementById('category');
  const categoryValue = categoryInput.value;
  console.log(categoryValue);

  const yearInput = document.getElementById('year');
  const yearValue = yearInput.value;
  console.log(yearValue);

  console.log(`I searched for the category of ${categoryValue} and the year of ${yearValue}.`);
})

// To fetch data from API (all data with default limit of 25)
const prizes = fetch('https://api.nobelprize.org/2.1/nobelPrizes');
prizes
.then(response => response.json())
.then(data => console.log(data));

