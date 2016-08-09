

var a = angular.module('Grid', ['ui.grid', 'ui.grid.edit', 'ui.grid.rowEdit',
 'ui.grid.cellNav'
]);



a.controller('GridController', ['$scope','$q', '$interval','$http',
function($scope, $q, $interval,$http) 
{ 
  $scope.gridOptions = {};
 
  $scope.gridOptions.columnDefs = [
    { name: 'id', enableCellEdit: false },
    { name: 'firstName', displayName: 'Name (editable)' },
    { name: 'lastName', displayName: 'Name (editable)' },
   // { name: 'gender' },
    { name: 'company', displayName: 'Company' },
    { name: 'age', displayName: 'Age' },
   // { name: 'registered', displayName: 'Registered' , type: 'date', cellFilter: 'date:"yyyy-MM-dd"'},
  
    { name: 'employed', displayName: 'Employed', type: 'boolean'}
  ];
 
  $scope.saveRow = function( rowEntity ) {
    // create a fake promise - normally you'd use the promise returned by $http or $resource
    var promise = $q.defer();
    $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
 
    // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
    $interval( function() {
      if (rowEntity.gender === 'male' ){
        promise.reject();
      } else {
        promise.resolve();
      }
    }, 3000, 1);
  };
 
  $scope.gridOptions.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };
 
  $http.get('http://localhost:52926/api/Employees')
  .success(function(data) {
    // for(i = 0; i < data.length; i++){
    //   data[i].registered = new Date(data[i].registered);
    // }
    $scope.gridOptions.data = data;
  });
//    $scope.gridOptions.data = [
//     {
//       "id":1,
//         "firstName": "Cox",
//         "lastName": "Carney",
//         "company": "Enormo",
//         "employed": true
//     },
//     {
//       "id":2,
//         "firstName": "Lorraine",
//         "lastName": "Wise",
//         "company": "Comveyer",
//         "employed": false
//     },
//     {
//       "id":3,
//         "firstName": "Nancy",
//         "lastName": "Waters",
//         "company": "Fuelton",
//         "employed": false
//     }
// ];
}]);