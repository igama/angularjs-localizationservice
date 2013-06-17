/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/8/12
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

function AppController($route,$scope,$routeParams,localize,$location) {
    $scope.People = [{FirstName:"Jim", LastName:"Lavin", Email:"jlavin@jimlavin.net", Bio:"Creator and Host of Coding Smackdown TV"}];
    $scope.lang = 'en';

    $scope.setEnglishLanguage = function() {
    		$scope.setLanguage('en');
    };

    $scope.setPigLatinLanguage = function() {
    		$scope.setLanguage('es');

    };

    $scope.setLanguage = function(newLanguage,path) {
    	console.log('App: setLanguage : ' + newLanguage);
    	console.log('App: current lang : ' + localize.language);
    	if (newLanguage != localize.language) {
    		localize.setLanguage(newLanguage,$location.path());
    		$scope.lang = localize.language;
    	}else {
    		console.log("App : Nothing to do");
    	}

    };
}

