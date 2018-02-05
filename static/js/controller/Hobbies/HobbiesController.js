markusWebAppModule.controller('hobbyController', function($scope, $http){
	$scope.daysOfWeek = [{"dayOfWeek":"Monday", "value": "Chest & Abs & Cardio"},
						 {"dayOfWeek":"Tuesday", "value": "Back & Shoulders"},
						 {"dayOfWeek":"Wednesday", "value": "Abs & Cardio"},
						 {"dayOfWeek":"Thursday", "value": "Legs & Glutes"},
						 {"dayOfWeek":"Friday", "value": "Triceps & Biceps & Abs & Cardio"},
						 {"dayOfWeek":"Saturday", "value": "Cardio"},
						 {"dayOfWeek":"Sunday", "value": "Abs & Cardio"}
						];
	
	$scope.activityList = [{"name":"Bench", "value":"225lbs"},
						   {"name":"Squat", "value":"185lbs"},
						   {"name":"Deadlift", "value":"225lbs"},
						   {"name":"Running", "value": "18km"},
						   {"name":"Swimming", "value": "1km"},
						   {"name":"Rowing", "value":"500m in 1min 45s"},
						   {"name":"Plank", "value": "5min"},
						   {"name":"Favorites", "value":"Running, Kick Boxing, Chest, Abs"}
						   ];
					
});