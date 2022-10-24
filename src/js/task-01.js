
const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoriesItemsEl = document.querySelectorAll('.item');

categoriesItemsEl.forEach(item => {
  console.log(`Categoty: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
})


// const mainListRef = document.querySelector('#categories');

// function inputListDataToConsole() {
//   const listCheldren = [...mainListRef.children];
//   listChildren.forEach(childrenItem => {
//      console.log(childrenItem.h1.textContent)
//   })
// }
// inputListDataToConsole()
