'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

for (let index = 0; index < btnsOpenModel.length; index++) {
  console.log(btnsOpenModel[index].textContent);
}
