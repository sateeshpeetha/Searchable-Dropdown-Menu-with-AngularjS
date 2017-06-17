 var app = angular.module('myApp', []);

function dropdownCtl($scope, $element, $attrs) {
  
	 $scope.menusearch = "";
	 $scope.configmenu = config;
	
	$scope.toggle = function() {
		
		value = document.getElementById("dropdownmenu").style.display;
		
		if ( value == "block") {document.getElementById("dropdownmenu").style.display = "none"; }
		else {document.getElementById("dropdownmenu").style.display = "block"; }
	}
   
   }
   
   app.component('dropdown', {

  templateUrl: 'dropdown.tpl',
  controller: dropdownCtl

});
