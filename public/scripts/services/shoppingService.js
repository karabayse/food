// ShoppingService

myApp.service('ShoppingService', function($http) {
  let sv = this;

  // POST for shopping
  sv.addItem = function(shoppingItem) {
    console.log('in addItem POST in shoppingService.js');
    return $http({
      method: 'POST',
      url: '/shoppingRoute',
      data: shoppingItem
    }).then(function(response) {
      console.log('back from addItem POST:', response);
    });
  }; // end addItem

  // GET for shopping
  sv.getShoppingList = function() {
    return $http({
      method: 'GET',
      url: '/shoppingRoute'
    }).then(function(response) {
      console.log('back from getShoppingList:', response);
      sv.data = response.data;
    });
  };

}); // end service
