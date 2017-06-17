<div class="dropdownmenubox">
	<div class="textinput">
	<input  type="text" ng-model="menusearch" size="30" style="border:1px;font-size:18px" placeholder="Type job category or click downarrow" onfocus="toggle()" >
   <button onclick="toggle()"> <b> &darr;&darr; </b></button>
   </div>
	<ul id="dropdownmenu" style="display:none;height: 200px; overflow: auto">
	<div ng-repeat="x in configmenu | filter : menusearch " >
		
            <li > <a href="{{x.link}}" ng-bind="x.key" >  </a></li>
  	
	</div>
	</ul>
</div>
