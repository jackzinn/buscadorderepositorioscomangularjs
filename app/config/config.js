app.run(function($rootScope){
    $rootScope.global = {
        titlePage : '',
    };
});

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/list');
    
    $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'app/views/list.html',
        controller: 'listCtrl'
    })
    
});