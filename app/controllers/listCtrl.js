app.controller('listCtrl', function ($scope, $rootScope, listAPIservices) {
    $rootScope.title = 'Lista de Repositórios';
    // GET DO DADOS DA API
    $scope.userData = [];

    $scope.buscarUsuario = function () {
        $scope.userData.splice(0, 1);

        $scope.getByUser = listAPIservices.usergetbyparams($scope.code_repository).then(function (response) {
            $scope.userData.push(response.data);
        });
    };
    // APERTAR ENTER PARA INTERAGIR
    $scope.keyPressEnterExecute = function ($event) {
        if ($event.keyCode == 13) {

            $scope.buscarUsuario();

        }
    };
    // GET REPOSITORY BY params USER
    $scope.repositoryByparams = []

    $scope.buscarRepositorio = function () {
        $scope.repositoryByparams.splice(0, 1);

        $scope.getRepoByUser = listAPIservices.getbyparamsRepo($scope.code_repository).then(function (response) {
            $scope.repositoryByparams.push(response.data);
        });
    };
    // LIMPAR OS REPOSITORIOS
    $scope.keyDataRepositorys = function(){
        $scope.repositoryByparams = [];
    };
});