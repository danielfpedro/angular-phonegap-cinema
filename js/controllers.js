angular.module('cinema.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', '$http', function ($scope, $http) {
        
        var url = 'http://tcc-teste.aws.af.cm/api/noticias/get/?curso=1';

		$scope.loadNoticias = true;
        $http.get(url).then(function(data){
        	$scope.noticias = data.data.conteudo;
			$scope.loadNoticias = false;
        });


    }]);
