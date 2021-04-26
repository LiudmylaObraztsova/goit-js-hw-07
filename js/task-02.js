const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);

const createListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    
    return itemRef;
  });
};

const elements = createListIngredients(ingredients);
ingredientsListRef.append(...elements);