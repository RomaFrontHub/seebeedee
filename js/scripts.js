document.addEventListener('DOMContentLoaded', start);
function start() {
  var btnInc = document.querySelector('.btn-inc');
  var btnDesc = document.querySelector('.btn-desc');
  var counterValue = document.querySelector('.counter-value');
  // attach event listener
  btnInc.addEventListener('click', function() {
    var value = +counterValue.value;
    var max = + counterValue.max;
    if (value < max) {
      counterValue.value = value + 1;
    }
  });
  btnDesc.addEventListener('click', function() {
    var value = +counterValue.value;
    var min = + counterValue.min;
    if (value > min) {
      counterValue.value = value - 1;
    }
  });
}

//Options
let optionOne = document.querySelector('.event-option-one');
let optionTwo = document.querySelector('.event-option-two');
let optionThree = document.querySelector('.event-option-three');
let optionFour = document.querySelector('.event-option-four');

optionTwo.addEventListener('click', function() {
  optionTwo.classList.add('block-active');
  optionOne.classList.remove('block-active');
});
optionOne.addEventListener('click', function() {
  optionOne.classList.add('block-active');
  optionTwo.classList.remove('block-active');
});
optionThree.addEventListener('click', function() {
  optionThree.classList.add('block-active');
  optionFour.classList.remove('block-active');
});
optionFour.addEventListener('click', function() {
  optionFour.classList.add('block-active');
  optionThree.classList.remove('block-active');
});

//View
let productsGrid = document.querySelector('.main-products__grid');
let productsList = document.querySelector('.main-products__list');
let gridBtn = document.querySelector('.view-grid');
let listBtn = document.querySelector('.view-list');

listBtn.addEventListener('click', function() {
  productsList.style.display = "flex";
  productsGrid.style.display = "none";
  gridBtn.classList.remove("view-active");
  listBtn.classList.add("view-active");
});
gridBtn.addEventListener('click', function() {
  productsList.style.display = "none";
  productsGrid.style.display = "grid";
  listBtn.classList.remove("view-active");
  gridBtn.classList.add("view-active");
});

//Filters
const openBtn = document.querySelector(".filter-adaptive");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".main-filter");

openBtn.addEventListener("click", function () {
  sidebar.classList.add("show-filter");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-filter");
});