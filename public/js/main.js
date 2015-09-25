angular.module("App",[])
    .controller("HomeCtrl",['$http', function homeController($http){
        function successHandler(data){
            console.log(data)
        }
        function errorHandler(error){
            console.log(error)
        }
        $http.get('/search?test=test')
                .then(successHandler, errorHandler)
    }])
