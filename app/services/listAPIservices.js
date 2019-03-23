app.service('listAPIservices', function ($http, $rootScope) {

    let _usergetbyparams = function(params){
        return $http({
            method: 'GET',
            url: 'https://api.github.com/users/'+params
        });
    };
    let _getbyparamsRepos = function(params){
        return $http({
            method: 'GET',
            url: 'https://api.github.com/users/'+params+'/repos'
        });
    };
        
    return {
        usergetbyparams : _usergetbyparams,
        getbyparamsRepo: _getbyparamsRepos
    };
});