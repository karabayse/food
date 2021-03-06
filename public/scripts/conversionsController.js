console.log('in conversionsController');

myApp.controller('ConversionsController', function(ConversionsService) {
  console.log('in ConversionsController');
  let vm = this;

  vm.convertInput = function() {
    console.log('in convertInput function');
    let conversionObject = {
      input: vm.conversionsInput,
      select: vm.conversionsSelect
    }; // end conversionsObject
    console.log('conversionObject:', conversionObject);
    ShoppingService.convertInput(conversionObject).then(function() {
      sweetAlert("Item Added!");
      vm.conversionsInput = '';
    }); // end ConversionsService.addItem
  };

});
