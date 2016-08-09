

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
 
  // $http.get('http://localhost:52926/api/Employees')
  // .success(function(data) {
  //   // for(i = 0; i < data.length; i++){
  //   //   data[i].registered = new Date(data[i].registered);
  //   // }
  //   $scope.gridOptions.data = data;
  // });
   $scope.gridOptions.data = [
  {
    "id": 0,
    "firstName": "FN0",
    "lastName": "LN0",
    "company": "Company0",
    "age": 57,
    "employed": true
  },
  {
    "id": 1,
    "firstName": "FN1",
    "lastName": "LN1",
    "company": "Company1",
    "age": 60,
    "employed": true
  },
  {
    "id": 2,
    "firstName": "FN2",
    "lastName": "LN2",
    "company": "Company2",
    "age": 70,
    "employed": true
  },
  {
    "id": 3,
    "firstName": "FN3",
    "lastName": "LN3",
    "company": "Company3",
    "age": 29,
    "employed": true
  },
  {
    "id": 4,
    "firstName": "FN4",
    "lastName": "LN4",
    "company": "Company4",
    "age": 73,
    "employed": true
  },
  {
    "id": 5,
    "firstName": "FN5",
    "lastName": "LN5",
    "company": "Company5",
    "age": 51,
    "employed": true
  },
  {
    "id": 6,
    "firstName": "FN6",
    "lastName": "LN6",
    "company": "Company6",
    "age": 60,
    "employed": true
  },
  {
    "id": 7,
    "firstName": "FN7",
    "lastName": "LN7",
    "company": "Company7",
    "age": 36,
    "employed": true
  },
  {
    "id": 8,
    "firstName": "FN8",
    "lastName": "LN8",
    "company": "Company8",
    "age": 24,
    "employed": true
  },
  {
    "id": 9,
    "firstName": "FN9",
    "lastName": "LN9",
    "company": "Company9",
    "age": 44,
    "employed": true
  },
  {
    "id": 10,
    "firstName": "FN10",
    "lastName": "LN10",
    "company": "Company10",
    "age": 51,
    "employed": true
  },
  {
    "id": 11,
    "firstName": "FN11",
    "lastName": "LN11",
    "company": "Company11",
    "age": 71,
    "employed": true
  },
  {
    "id": 12,
    "firstName": "FN12",
    "lastName": "LN12",
    "company": "Company12",
    "age": 46,
    "employed": true
  },
  {
    "id": 13,
    "firstName": "FN13",
    "lastName": "LN13",
    "company": "Company13",
    "age": 73,
    "employed": true
  },
  {
    "id": 14,
    "firstName": "FN14",
    "lastName": "LN14",
    "company": "Company14",
    "age": 40,
    "employed": true
  },
  {
    "id": 15,
    "firstName": "FN15",
    "lastName": "LN15",
    "company": "Company15",
    "age": 48,
    "employed": true
  },
  {
    "id": 16,
    "firstName": "FN16",
    "lastName": "LN16",
    "company": "Company16",
    "age": 50,
    "employed": true
  },
  {
    "id": 17,
    "firstName": "FN17",
    "lastName": "LN17",
    "company": "Company17",
    "age": 26,
    "employed": true
  },
  {
    "id": 18,
    "firstName": "FN18",
    "lastName": "LN18",
    "company": "Company18",
    "age": 55,
    "employed": true
  },
  {
    "id": 19,
    "firstName": "FN19",
    "lastName": "LN19",
    "company": "Company19",
    "age": 43,
    "employed": true
  },
  {
    "id": 20,
    "firstName": "FN20",
    "lastName": "LN20",
    "company": "Company20",
    "age": 28,
    "employed": true
  },
  {
    "id": 21,
    "firstName": "FN21",
    "lastName": "LN21",
    "company": "Company21",
    "age": 32,
    "employed": true
  },
  {
    "id": 22,
    "firstName": "FN22",
    "lastName": "LN22",
    "company": "Company22",
    "age": 58,
    "employed": true
  },
  {
    "id": 23,
    "firstName": "FN23",
    "lastName": "LN23",
    "company": "Company23",
    "age": 30,
    "employed": true
  },
  {
    "id": 24,
    "firstName": "FN24",
    "lastName": "LN24",
    "company": "Company24",
    "age": 36,
    "employed": true
  },
  {
    "id": 25,
    "firstName": "FN25",
    "lastName": "LN25",
    "company": "Company25",
    "age": 51,
    "employed": true
  },
  {
    "id": 26,
    "firstName": "FN26",
    "lastName": "LN26",
    "company": "Company26",
    "age": 58,
    "employed": true
  },
  {
    "id": 27,
    "firstName": "FN27",
    "lastName": "LN27",
    "company": "Company27",
    "age": 31,
    "employed": true
  },
  {
    "id": 28,
    "firstName": "FN28",
    "lastName": "LN28",
    "company": "Company28",
    "age": 40,
    "employed": true
  },
  {
    "id": 29,
    "firstName": "FN29",
    "lastName": "LN29",
    "company": "Company29",
    "age": 69,
    "employed": true
  },
  {
    "id": 30,
    "firstName": "FN30",
    "lastName": "LN30",
    "company": "Company30",
    "age": 56,
    "employed": true
  }];
}]);