define(['app',
    'factories/pageFramework'], function (app) {
    'use strict';
    app.register.controller('homeController',['$scope', '$state','pageFramework', function($scope, $state,pageFramework) {
        $scope.goto = function(state) {console.log(state);
        };
        pageFramework.setPageFramework($scope);
        $scope.greetMe="AMD world!";
        //This would be a call to the API...
        $scope.users=[
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'},
            {firstName: 'jason',lastName: 'cavaliere'}
        ];
        
        $scope.typeList = [{id:1, name: 'yes'}, {id:2, name: 'no'}, {id:3, name: '---------'}];
        
        
    }]);
});