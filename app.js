 var app = angular.module('myApp', []);

function dropdownCtl($scope, $element, $attrs) {
  
	 $scope.menusearch = "";
	 $scope.configmenu = config;
	
	
   
   }
function toggle(val) {
		
if (val )
{
document.getElementById("dropdownmenu").style.display = val;
}
else {
		value = document.getElementById("dropdownmenu").style.display;
		
		if ( value == "block") {document.getElementById("dropdownmenu").style.display = "none"; }
		else {document.getElementById("dropdownmenu").style.display = "block"; }
}
}
   
   app.component('dropdown', {

  templateUrl: 'dropdown.tpl',
  controller: dropdownCtl

});
