/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/8/12
 * Time: 11:49 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* App Module */

angular.module('localizeApp', ['localization', 'ui.bootstrap']).
    config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.
        when('/', {templateUrl:'/partials/home.html', controller:HomeController}).
        when('/:lang', {templateUrl:'/partials/home.html', controller:HomeController}).
        when('/:lang/edit/:index', {templateUrl:'/partials/form.html', controller:EditPersonController}).
        when('/:lang/new', {templateUrl:'/partials/form.html', controller:NewPersonController}).
        otherwise({redirectTo: '/404'});
        $locationProvider.html5Mode(false);
}]).run(function($rootScope, $routeParams,localize,$location){
	$rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute) {

		console.log("RPS1: routeParams Lang: " + $routeParams.lang);
		console.log("RPS1: FromLang: " + localize.language);
		console.log("RPS1: ToLang: " + $routeParams.lang);
		console.log("RPS1: localize.fromPath: " + localize.fromPath);
		console.log("RPS1: $location.path(): " + $location.path() );
		console.log("RPS1: localize.resourceFileLoaded: " + localize.resourceFileLoaded);
		if (localize.resourceFileLoaded && $routeParams.lang != localize.language && $routeParams.lang != undefined && localize.fromPath != $location.path() ) {
    		console.log("RPS2: Change Languages: " + $routeParams.lang);
    		console.log("RPS2: FromPath : " + $location.path());
    		localize.setLanguage($routeParams.lang,$location.path());
	        //$location.path('/'+newLanguage);
    	}else{
    		console.log("RTS: Nothing to do");
    	}


	})
});