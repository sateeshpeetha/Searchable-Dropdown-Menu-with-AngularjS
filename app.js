 var app = angular.module('myApp', []);

function dropdownCtl($scope, $element, $attrs) {
  
	 $scope.menusearch = "";
	 $scope.configmenu = config;
   
   }
   
   app.component('dropdown', {

  templateUrl: 'dropdown.tpl',
  controller: dropdownCtl

});
