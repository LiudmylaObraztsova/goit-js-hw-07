const listRef = document.querySelector('#categories');
console.log(listRef);

const listItemsRef = listRef.querySelector('li.item');
console.log(listItemsRef);

console.log(`В списке ${listItemsRef.length} категории.`);