function EmployeeIndexCtrl($scope, employeeService) {

    
    $scope.searchKey = "";

    $scope.clearSearch = function () {
        $scope.searchKey = "";
        $scope.init();
    }

    $scope.search = function () {
        employeeService.findByName($scope.searchKey).then(function (employees) {
            $scope.employees = employees;
        });
    }

    $scope.init = function() {
        employeeService.findAll().then(function (employees) {
            $scope.employees = employees;
        });
    }

    $scope.init();
      
}