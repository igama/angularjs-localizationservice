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
        when('/:lang', {templateUrl:'/partials/home.html', controller:HomeController}).
        when('/:lang/edit/:index', {templateUrl:'/partials/form.html', controller:EditPersonController}).
        when('/:lang/new', {templateUrl:'/partials/form.html', controller:NewPersonController}).
        otherwise({redirectTo: '/en'});
        $locationProvider.html5Mode(false);
}]).run(function($rootScope, $routeParams,localize,$location){
	$rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute) {
		if (localize.resourceFileLoaded && $routeParams.lang != undefined && $routeParams.lang != localize.language ) {
    		localize.setLanguage($routeParams.lang);
    	}

	})
});