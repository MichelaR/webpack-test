angular.module('chart')

.factory('JsonService', function($http)
{
  var url = 'Data/months.json';

    return {
        getSomeData: function(){
            return $http.get(url);
            //return $http.jsonp(url);
        }
    }
  })

.factory('provideData', function($rootScope)
{
  return{
    getMonths: function()
    {
      return
      //$http.get('Data/months.json').success(function(data) {

          //$scope.countries = data;

      }

      //angular.fromJson(Data/months.json)
    }

})

.factory('styleChart', function($rootScope)
{
  return{

  }
})

.factory('chartLabValueConfig', function($http)
{
  var url = 'Data/labValueConfig.json';

  return{
    getLabValueConfig: function()
    {
      return  $http.get(url);
    }
  }

})
