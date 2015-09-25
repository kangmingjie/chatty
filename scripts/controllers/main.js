'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ($scope, MessageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  MessageService.getMessages().then(function(response) {
  $scope.messages = response;
  console.log($scope.messages);
});
  $scope.addMessages = function() {
  	console.log($scope.addMessage);
	 MessageService.addMessage($scope.addMessage).then(function(data) {
  		$scope.addedMessage = data;
  		console.log($scope.addedMessage);
  		$scope.messages = data.data;
  	},function(error) {
  		console.log(error);
  	});
  	
  	}

 });
