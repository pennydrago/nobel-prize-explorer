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

  const darkFooter = document.querySelector('.dark-footer');
  darkFooter.classList.toggle('dark-mode-footer');
});

// Functions for searching for information, displaying search results and deleting search results

// Callback function to display the fetched data
function displayPrize(prize) {
  const prizeList = document.getElementById("prize-list");

  const prizeCard = document.createElement("li");
  prizeCard.classList.add("prize-card", "dark-card");
  const darkMode = document.querySelector(".dark-mode");
  if (darkMode) {
    prizeCard.classList.add("dark-mode-card");
  }
  prizeList.appendChild(prizeCard);

  const prizeCardList = document.createElement("ul");
  prizeCard.appendChild(prizeCardList);

  let prizeCardItem = document.createElement("li");
  prizeCardItem.textContent = prize.categoryFullName.en;
  prizeCardList.appendChild(prizeCardItem);

  prizeCardItem = document.createElement("li");
  prizeCardItem.textContent = prize.awardYear;
  prizeCardList.appendChild(prizeCardItem);

  prizeCardItem = document.createElement("li");
  prizeCardItem.textContent = `Awarded: ${prize.dateAwarded}`;
  prizeCardList.appendChild(prizeCardItem);

  prizeCardItem = document.createElement("li");
  prizeCardItem.textContent = `Prize amount: SEK ${prize.prizeAmount}`;
  prizeCardList.appendChild(prizeCardItem);

  prizeCardItem = document.createElement("li");
  prizeCardItem.textContent = "Laureate(s):";
  const prizeCardLaureates = document.createElement("ul");
  prizeCardItem.appendChild(prizeCardLaureates);

  prize.laureates.forEach(laureate => displayLaureate(laureate, prizeCardLaureates));
  prizeCardList.appendChild(prizeCardItem);

  const cardButton = document.createElement("button");
  cardButton.className = "delete";
  cardButton.type = "button";
  cardButton.textContent = "Delete";
  cardButton.addEventListener('click', deleteCard);
  prizeCard.appendChild(cardButton);
};

// Function to display laureate names
function displayLaureate(laureate, laureateList) {
  if (laureate.fullName) {
    const prizeCardLaureateName = document.createElement("li");
    prizeCardLaureateName.textContent = laureate.fullName.en;
    laureateList.appendChild(prizeCardLaureateName);
  } else if (laureate.orgName) {
    const prizeCardOrgName = document.createElement("li");
    prizeCardOrgName.textContent = laureate.orgName.en;
    laureateList.appendChild(prizeCardOrgName);
  }
}

// Function to remove prize card
function deleteCard(event) {
  event.target.parentNode.remove();
}

// Function to prevent default form behaviour
const form = document.querySelector('form');
form.addEventListener('submit', event => event.preventDefault());

// To fetch data from API for search input values
const search = document.getElementById('search');
search.addEventListener('click', function () {
  const categoryInput = document.getElementById('category');
  const categoryValue = categoryInput.value;

  const yearInput = document.getElementById('year');
  const yearValue = yearInput.value;
  
  const prizes = fetch(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeCategory=${categoryValue}&nobelPrizeYear=${yearValue}`);
  prizes
    .then(response => response.json())
    .then(data => data.nobelPrizes.forEach(prize => displayPrize(prize)));
});