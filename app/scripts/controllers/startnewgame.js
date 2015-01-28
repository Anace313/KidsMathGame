'use strict';

/**
 * @ngdoc function
 * @name kidsMathGameApp.controller:StartnewgameCtrl
 * @description
 * # StartnewgameCtrl
 * Controller of the kidsMathGameApp
 */
angular.module('kidsMathGameApp')
  .controller('StartnewgameCtrl', function ($scope) {
    $scope.startGame = function () {
      location.href = '#/play';
    }
  });
