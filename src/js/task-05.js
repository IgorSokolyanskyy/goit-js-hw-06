// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой,в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputChande)

function onInputChande(event) {
  console.log(event.currentTarget.value)
  spanRef.textContent = event.currentTarget.value
}
