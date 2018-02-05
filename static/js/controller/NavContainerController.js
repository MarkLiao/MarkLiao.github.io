markusWebAppModule.controller('webAppNavController', function($http, $rootScope, $scope){
	$scope.currentNavItem = "homePage";
	$scope.selectedNav = "./templates/Home/HomeContainer.html";
	$scope.changeContainer = function(changeTo){
		$scope.currentNavItem = changeTo;
		if(changeTo ==="homePage"){
			$scope.selectedNav="./templates/Home/HomeContainer.html";
			$scope.currentNavItem = "homePage";
		}else if (changeTo === "projectPage"){
			$scope.selectedNav = "./templates/Project/ProjectContainer.html";
			$scope.currentNavItem = "projectPage"
		}else if (changeTo === "hobbyPage"){
			$scope.selectedNav = "./templates/Hobbies/HobbiesContainer.html";
			$scope.currentNavItem = "hobbyPage";
		}
	}
});