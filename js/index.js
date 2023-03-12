let titles = [
  `Каша на завтрак`, 
  `Хачапури`, 
  `Крабовый салат`, 
  `Макарошки`, 
  `Куриный суп`, 
  `Медовик`
];
let prices = [150, 300, 200, 250, 100, 150];
let available = [false, true, true, true, true, false];

let foodContainer = document.querySelector(`.food-container`);

for (let i = 0; i < titles.length; i++) {
  let title = titles[i];
  let price = prices[i];
  let isAvailable = available[i];
  let classname = `card`;
  
  if (isAvailable) {
    classname += ` card-available`;
  } else {
    classname += ` card-not-available`;
    price = `-`;
  }

  foodContainer.innerHTML += `
  <div class="col">
    <div class="${classname}">
      <img src="assets/${i + 1}.jpeg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
          <span class="food-title">${title}</span>
          <span class="food-price badge bg-secondary">${price}</span>
        </h5>
      </div>
    </div>
  </div>
  `;
}

let cards = document.querySelectorAll(`.card`);

let total = document.querySelector(`#result`);

for (let i = 0; i < cards.length; i++){
  let card = cards[i];
  let price = prices[i];
  card.addEventListener(`click`, function(){
    if (card.classList.contains(`card-available`)) {
      card.classList.toggle(`card-active`);
      total.innerHTML = price;
    }
  })
}
