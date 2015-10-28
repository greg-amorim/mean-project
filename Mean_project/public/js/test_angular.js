var app = angular.module("myApp", []);

var mesFruitsTab=["Addel","Greg", "Auré","Thibs","Marco"] ;
/*var myApp = angular.module("Monapp", []);

app.controller('myCtrl', function($scope){
       $scope.toto ='ttotoototototo';
￼￼￼￼￼￼});*/


app.controller("monControl", function($scope, $http) {
    $scope.fruits = mesFruitsTab;
    $scope.lastName = "Doe";
    $scope.firstName = "Jone";
    });

/*app.controller("monControl"), function($scope, $http) {
    $scope.affichage=function(){
    $http.get('/articles')
    .success (function(data){
        $scope.articles=data;
     })	
    }
});*/

