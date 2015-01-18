'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", function($scope) {

	//Gestion Menu
	angular.element("#home").removeClass("active");
	angular.element("#calendrier").removeClass("active");
	angular.element("#team").addClass("active");
	
	$scope.affiche = false;
	$scope.currentIndex = 0;

	$scope.searchFilter = function(player) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(player.name);
	};

	$scope.enter = function(index) {
		$scope.affiche = true;
		$scope.currentIndex = index-1;
	}

	$scope.leave = function() {
		$scope.affiche = false;
	}

	$scope.players = [
		{
			id: 1,
			name: "Fabrice",
			surname: "Fabihno",
			lastName: "Betillou",
			role: "Attaquant",	
			birthdate: "02/02/1994",
			email: "fab.bet@gmail.com",	
			yearTeam: 3,	
		},
		{
			id: 2,
			name: "Vincent",
			surname: "Dudu",
			lastName: "Durvelle",
			role: "Milieu",
			birthdate: "22/04/1995",
			email: "dudu24@gmail.com",	
			yearTeam: 2,			
		},		
		{
			id: 3,
			name: "Patrick",
			surname: "Pat",
			lastName: "Faucher",
			role: "Défenseur",	
			birthdate: "14/06/1982",
			email: "pat.faucher@gmail.com",	
			yearTeam: 5,		
		},
		{
			id: 4,
			name: "Alexis",
			surname: "Xi",
			lastName: "Lombard",
			role: "Milieu",
			birthdate: "15/02/1986",
			email: "lexi.lom@gmail.com",	
			yearTeam: 5,			
		},
		{
			id: 5,
			name: "Thomas",
			surname: "Tom",
			lastName: "Hachy",
			role: "Attaquant",			
			birthdate: "04/12/1978",
			email: "tom.hac@gmail.com",	
			yearTeam: 5,
		}
	];				 
}]);