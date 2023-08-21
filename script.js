const arrayContainer = document.querySelector('.array-container');
const sortBtn = document.getElementById('sort-btn');
const randomizeBtn = document.getElementById('randomize-btn');

let array = [];
const arraySize = 10; 

initializeArray();
renderArray();

function initializeArray() {
  array = [];
  for (let i = 0; i < arraySize; i++) {
    array.push(getRandomNumber(10, 100));
  }
}

function renderArray() {
  arrayContainer.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const arrayBar = document.createElement('div');
    arrayBar.className = 'array-bar';
    arrayBar.style.height = `${array[i]}px`;
    arrayContainer.appendChild(arrayBar);
  }
}

async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      arrayContainer.children[j].style.backgroundColor = 'red';
      arrayContainer.children[j + 1].style.backgroundColor = 'red';
      await delay(100); 

      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }

      arrayContainer.children[j].style.backgroundColor = '#00bfff';
      arrayContainer.children[j + 1].style.backgroundColor = '#00bfff';
      await delay(100);
    }
  }
}

function swap(i, j) {
  [array[i], array[j]] = [array[j], array[i]];
  renderArray();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sortBtn.addEventListener('click', async () => {
  sortBtn.disabled = true;
  randomizeBtn.disabled = true;

  await bubbleSort();

  sortBtn.disabled = false;
  randomizeBtn.disabled = false;
});

randomizeBtn.addEventListener('click', () => {
  initializeArray();
  renderArray();
});
