// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.



document.getElementById("validation-input").onblur = function() {
  console.log(this.value.length)
  if (this.getAttribute('data-length') > this.value.length) { 
    this.classList.remove('valid')
    this.classList.add('invalid')
  } else {
    this.classList.remove('invalid')
    this.classList.add('valid')
  }
}

