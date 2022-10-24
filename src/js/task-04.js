const counterValue  = {
    value: 0,
    increment() {
      this.value += 1;
      console.log(this.value);
  },
    decrement() {
      this.value -= 1;
      console.log(this.value);
    },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
}

function onIncrementBtnClick() {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
}


