// ConversionsService

myApp.service('ConversionsService', function($http) {
  let sv = this;

  // POST for converions
  sv.convertInput = function(conversionItem) {
    console.log('in convertInput POST in conversionsService.js');
    return $http({
      method: 'POST',
      url: '/conversionsRoute',
      data: conversionItem
    }).then(function(response) {
      console.log('back from addItem POST:', response);
    });
  }; // end convertInput

});
