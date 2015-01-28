'use strict';

/**
 * @ngdoc function
 * @name kidsMathGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kidsMathGameApp
 */
angular.module('kidsMathGameApp')
  .controller('MainCtrl', function ($scope, ngAudio) {
    var count = 0;
    $scope.lives = [0, 1, 2];
    $scope.score = 0;
    var questionAnswers = [
      {
        question: '150+180 = ',
        answers: [230, 330, 320, 203],
        correctAnswer: 330
      },
      {
        question: '6*15 = ',
        answers: [125, 75, 90, 150],
        correctAnswer: 90
      },
      {
        question: '950-725 = ',
        answers: [525, 125, 225, 215],
        correctAnswer: 225
      },
      {
        question: '770/11 = ',
        answers: [77, 70, 7, 17],
        correctAnswer: 70
      },
      {
        question: '450/2 = ',
        answers: [230, 330, 225, 250],
        correctAnswer: 225
      },
      {
        question: '225+395 = ',
        answers: [615, 330, 512, 620],
        correctAnswer: 620
      }, {
        question: '200+850 = ',
        answers: [1150, 1005, 1050, 5001],
        correctAnswer: 1050
      }
    ];

    var rightAnswerSound = ngAudio.load("sounds/Correct-answer.mp3");
    var WinningSound = ngAudio.load("sounds/Winning-sound-effect.mp3");
    var wrongAnswerSound = ngAudio.load("sounds/Wrong-Answer-sound-effect.mp3");


    $scope.currentQuestion = questionAnswers[0];

    $scope.checkAnswer = function (ans) {
      if (ans == questionAnswers[count].correctAnswer) {
        $scope.score += 50;
        rightAnswerSound.play();
      } else {
        $scope.lives.pop();
        wrongAnswerSound.play();
      }
      if (count == questionAnswers.length - 1 || $scope.score == 250) {
        WinningSound.play();
        $scope.playerStatus = 'Congratulations! You Win!';
        $('#myModal').modal('show')
      }
      if ($scope.lives.length == 0) {
        $scope.playerStatus = 'Game Over! Try Again';
        $('#myModal').modal('show')
      }
      setTimeout(function () {
        getQuestion()
      }, 1000);

    };

    function getQuestion() {
      count++;
      $scope.currentQuestion = questionAnswers[count];
    }

    $scope.startGame = function () {
      location.href = '#/';
    }
    $scope.EndGame = function () {
      var win = window.open("about:blank", "_self");
      win.close();
    }
  });
