console.log('in shopping.js');

// Event Listener
document.querySelector('shopping-list').addEventListener('click', addItem);

function addItem(e) {
  console.log('in function addItem');
  let newItem = document.querySelector('shopping-list').value;

  document.querySelector('#itemList').innerHTML = listItem;
}
