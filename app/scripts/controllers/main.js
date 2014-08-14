'use strict';

angular.module('sywhackImgeditorApp')
  .controller('MainCtrl', [ "$scope", "filterService", function ($scope, filterService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
