var app = angular.module('alsqstop', []);
app.controller('mainCtrl', function($scope, $http) {
    $scope.CompanyName = "ALS Quick Mart";
    
    var currentTime = new Date();
    $scope.CurrentYear = currentTime.getFullYear();
    
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});