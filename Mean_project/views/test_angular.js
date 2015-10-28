var app = angular.module("myApp", []);

var mesFruitsTab=["Addel","Greg", "Auré","Thibs","Marco"] ;
/*var myApp = angular.module("Monapp", []);

app.controller('myCtrl', function($scope){
       $scope.toto ='ttotoototototo';
￼￼￼￼￼￼});*/

/*app.controller("myControl", function($scope, $http) {
    $scope.fruits = mesFruitsTab;
    $scope.lastName = "Doe";
    $scope.firstName = "JonezfjnjkerbOOOOOOOOOfhjkberhjkvbehjkrbvh";
    });*/
/*app.controller("myControl"), function($scope, $http) {
    $scope.affichage=function(){
    $http.get('/test')
    .success (function(data){
        $scope.users=data;
     }) 
    }
});*/

app.controller("myControl", function($scope, $http) {
    $scope.affichage=function(){
        $http.get('/articles')
        .success(function(data){
            $scope.art=data
        })
    }

    $scope.affichage_user=function(){
        $http.get('/user')
        .success(function(data2){
          if (data2 == "admin"){
            $scope.adm="true"; 
          }
          else{
            $scope.Nadm="false";
            console.log(data2)
            //$scope.u=data2
          }
      })
    }
    $scope.traitForm=function(){
       $http.post('/formulaireA',$scope.user)
       .success(function(data){
             if (data=='err'){
               alert("Erreur d'enregistrement.");
               } else{
               console.log("Article enregistré.");
               }
             $scope.user={};
             $scope.affichage();
              })
     }

     $scope.formC=function(){
       $http.post('/formulaireC',$scope.t)
       .success(function(data){
             if (data=='err'){
               alert("Erreur d'enregistrement.");
               } else{
               console.log("Article enregistré.");
               }
             $scope.t={};
             $scope.affichage();
              })
     }
    

    $scope.supr=function(fiche){
       $http.delete('/api/suppr/'+fiche._id)
       .success(function(data){
             if (data!='err'){
                   console.log("Article supprimé.");
                    } 
                else{
                     alert("Erreur suppression.");
                     
                   }
                   $scope.affichage();
              })
       }
       $scope.affichage();

})