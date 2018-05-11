console.log('in shoppingController.js');

myApp.controller('ShoppingController', function(       ) {
  console.log('in ShoppingController');
  let vm = this;

vm.addItem = function() {
  console.log('in addItem function');
  let shoppingObject = {
    item: vm.shoppingInput
  }; // end shoppingObject
  console.log('shoppingObject:', shoppingObject);
  ShoppingService.addItem(shoppingObject).then(function() {
    vm.shoppingInput = '';
  }); // end ShoppingService.addItem
};

vm.showShoppingList = function() {
    console.log('in showShoppingList');
    ShoppingService.getShoppingList().then(function() {
      vm.items = ShoppingService.data;
      console.log('back in EntryController with:', vm.items);
    });
  }; // end showShoppingList

}); // end controller
