console.log('in shoppingController.js');

myApp.controller('ShoppingController', function(ShoppingService) {
  console.log('in ShoppingController');
  let vm = this;

 vm.getShoppingList = function() {
      console.log('in showShoppingList');
      ShoppingService.getShoppingList().then(function() {
        vm.items = ShoppingService.data;
        console.log('back in ShoppingController with:', vm.items);
      });
    }; // end showShoppingList


  vm.addItem = function() {
    console.log('in addItem function');
    let shoppingObject = {
      item: vm.shoppingInput
    }; // end shoppingObject
    console.log('shoppingObject:', shoppingObject);
    ShoppingService.addItem(shoppingObject).then(function() {
      sweetAlert("Item Added!");
      vm.shoppingInput = '';
    }); // end ShoppingService.addItem
  };

  vm.delete = function(index) {
    console.log('in delete function');
    sweetAlert({
      title: "Are you sure?",
      text: "Are you sure you want to delete this item?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CD3278",
      confirmButtonText: "Yes, delete it",
      // closeOnConfirm: false
    }).then(function() {
      console.log('delete item confirmed');
      ShoppingService.delete(vm.items[index]._id).then(function() {
        sweetAlert("Item Deleted!");
        vm.getShoppingList();
      });
    });
  }; // end delete function

}); // end controller
