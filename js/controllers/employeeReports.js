function EmployeeReportsCtrl($scope, employeeService, $stateParams) {

    
    employeeService.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
      
}