const listRef = document.querySelector('#categories');
console.log(listRef);

// const listItemsRef = listRef.querySelector('li.item');
const listItemsRef = listRef.length;
console.log(listItemsRef);

console.log(`В списке ${listItemsRef.length} категории.`);