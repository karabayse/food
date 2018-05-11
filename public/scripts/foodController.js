let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'ShoppingController',
    controllerAs: 'ShoppingController as sc'
  }).when('/shopping', {
    templateUrl: 'views/shopping.html',
    controller: 'ShoppingController',
    controllerAs: 'ShoppingController as sc'
  }).when('/recipes', {
    templateUrl: 'views/recipes.html',
    controller: 'RecipesController',
    controllerAs: 'RecipesController as rc'
  }).when('/conversions', {
    templateUrl: 'views/conversions.html',
    controller: 'ConversionsController',
    controllerAs: 'ConversionsController as cc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});
