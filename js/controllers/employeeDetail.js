function EmployeeDetailCtrl($scope, employeeService, $stateParams) {

    
    employeeService.findById($stateParams.employeeId).then(function(employee) {
            $scope.employee = employee;
    });
      
}