const listRef = document.querySelector('#categories');
// console.log(listRef);
const listItemsRef = listRef.querySelectorAll('li.item');
// console.log(listItemsRef);
console.log(`В списке ${listItemsRef.length} категории.`);

const countItemsRef = (items) => {
    items.forEach(item => {
        const titleRef = item.querySelector('h2');
        console.log(`Категория: ${titleRef.textContent}`);
        const itemRef = item.querySelectorAll('li');
        console.log(`Количество элементов: ${itemRef.length}`);
    })
};

countItemsRef(listItemsRef);