markusWebAppModule.controller('projectController', function($http, $scope, $rootScope){
	$scope.angularWebsiteDate = "2018";
	$scope.workoutProfileDate = "2018";
	$scope.fitnessQuestDate = "2014-2015";
	$scope.flipNMatchDate = "2016";
	$scope.mathQWhizDate = "2016";
	$scope.flipNMatch_img1 = "./static/images/project/FlipNMatch/FlipNMatch_6.png";
	$scope.flipNMatch_img2 = "./static/images/project/FlipNMatch/FlipNMatch_7.png";
	$scope.selectedTab=0;
	$scope.showElement = false;
	$scope.enlargeImg = function($event){
		$scope.showElement=true;
		$scope.selectedImgUrl = $event.currentTarget.src;
	};
	
	$scope.close = function(){
		$scope.showElement=false;
	};
	
	$scope.changeIndex = function(index){
		$scope.selectedTab=index;
	}
});