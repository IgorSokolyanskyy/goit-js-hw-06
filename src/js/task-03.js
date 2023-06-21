/** @format */

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const listRef = document.querySelector(".gallery");

// const markup = images
//   .map(
//     ({
//       url,
//       alt,
//     }) => `<li class="js-item"><img  src="${url}" alt="${alt}" width='140' height='100'></li>`
//   )
//   .join("");

// listRef.insertAdjacentHTML("beforeend", markup);

// console.log(listRef);

function createMarkup(images) {
  return images
    .map(
      ({ url, alt }) =>
        `<li>
           <img src="${url}" alt="${alt}" width='200' height='150'>
        </li>`
    )
    .join("");
}

listRef.insertAdjacentHTML("beforeend", createMarkup(images));
