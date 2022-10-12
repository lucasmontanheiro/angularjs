var app1 = angular.module('app1', []);

app1.controller('gListCtrl', function($scope) {
  $scope.groceries = [
      {item: 'Burratta', purchased: true},
      {item: 'Pesto', purchased: false},
      {item: 'Cashews', purchased: false},
      {item: 'Milk', purchased: true}
  ]
});