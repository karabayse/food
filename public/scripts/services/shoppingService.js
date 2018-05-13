// ShoppingService

myApp.service('ShoppingService', function($http) {
  let sv = this;

  // POST for contact
  sv.addItem = function(shoppingItem) {
    console.log('in addItem POST in shoppingService.js');
    return $http({
      method: 'POST',
      url: '/shoppingRoute',
      data: shoppingItem
    }).then(function(response) {
      console.log('back from addItem POST:', response);
    });
  };
}); // end service
