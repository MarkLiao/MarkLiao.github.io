markusWebAppModule.controller('skillsController', function($http, $scope, $rootScope){
	$scope.skills = [{"skillName":"Programming Languages", "skillValue":"Java, C++, Python"},
					 {"skillName":"Front-End Development", "skillValue": "HTML, CSS, LESS, Javascript, AngularJs, JQuery"},
					 {"skillName":"Frameworks", "skillValue": "Spring, Spring MVC, SpringBoot, Hibernate, Mockito, J-Unit"},
					 {"skillName":"Web Technologies", "skillValue": "JSON, REST, XML"},
					 {"skillName":"IDEs", "skillValue":"Eclipse, IntelliJ, Android Studio"},
					 {"skillName":"Source Controls", "skillValue": "Git, SVN, Liquibase"},
					 {"skillName":"Databases", "skillValue": "MySql, Oracle"},
					 {"skillName":"Front-End Debugging" , "skillValue": "Firefox, Chrome, IE developer tools"},
					 {"skillName":"Software Processes", "skillValue": "Agile, Software Development Life Cycle, Software Architectures, Design Patterns"},
					 {"skillName":"Tools", "skillValue": "JIRA, Crucible, TeamCity, Outlook, Webex, Confluence, Sharepoint, Slack"},
					 {"skillName":"Prototyping", "skillValue":"ForeUI"}
					 ];
	
	
});