const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsEl = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = ingredient

  return liEl
})

ingredientsEl.append(...elements)

console.log(ingredientsEl)