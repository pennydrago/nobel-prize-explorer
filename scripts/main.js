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
  console.log('Search button clicked'); // test
});

// Callback function to log the fetched data to the console
function displayPrize(prize) {
  console.log(prize.awardYear);
  console.log(prize.categoryFullName.en);
};

// To fetch data from API for search input values
search.addEventListener('click', function () {
  const categoryInput = document.getElementById('category');
  const categoryValue = categoryInput.value;

  const yearInput = document.getElementById('year');
  const yearValue = yearInput.value;

  console.log(`I searched for the category of ${categoryValue} and the year of ${yearValue}.`);

  const prizes = fetch(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeCategory=${categoryValue}&nobelPrizeYear=${yearValue}`);
  prizes
    .then(response => response.json())
    .then(data => data.nobelPrizes.forEach(prize => displayPrize(prize)));
});

// Function to display search results

// To test creating and adding elements to the DOM
const main = document.querySelector("main");

const discovery = document.createElement("section");
discovery.id = "discovery";

const container = document.createElement("div");
container.className = "container";
discovery.appendChild(container);

const subheading = document.createElement("h2");
subheading.className = "dark-element";
subheading.textContent = "Discovery";
container.appendChild(subheading);

const prizeList = document.createElement("ul");
prizeList.id = "prize-list";
container.appendChild(prizeList);

const prizeCard = document.createElement("li");
prizeCard.classList.add("prize-card", "dark-card");
prizeList.appendChild(prizeCard);

const prizeCardList = document.createElement("ul");
prizeCard.appendChild(prizeCardList);

let prizeCardItem = document.createElement("li");
prizeCardItem.textContent = "Nobel Prize";
prizeCardList.appendChild(prizeCardItem);

prizeCardItem = document.createElement("li");
prizeCardItem.textContent = "Year";
prizeCardList.appendChild(prizeCardItem);

prizeCardItem = document.createElement("li");
prizeCardItem.textContent = "Laureates";
prizeCardList.appendChild(prizeCardItem);

prizeCardItem = document.createElement("li");
prizeCardItem.textContent = "Topic";
prizeCardList.appendChild(prizeCardItem);

main.appendChild(discovery);