services.factory('employeeService', function($q) {
    'use strict';
    var employees = [
    {
        "id": 1,
        "firstName": "Real",
        "lastName": "Prad",
        "managerId": 0,
        "managerName": "",
        "reports": 4,
        "title": "President and CEO",
        "department": "Corporate",
        "cellPhone": "617-000-0001",
        "officePhone": "781-000-0001",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 2,
        "firstName": "Shebin",
        "lastName": "K",
        "managerId": 1,
        "managerName": "Real Prad",
        "reports": 0,
        "title": "CTO",
        "department": "Engineering",
        "cellPhone": "617-000-0002",
        "officePhone": "781-000-0002",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 3,
        "firstName": "Hari",
        "lastName": "Krishna",
        "managerId": 1,
        "managerName": "Real Prad",
        "reports": 1,
        "title": "CHRO",
        "department": "Engineering",
        "cellPhone": "617-000-0003",
        "officePhone": "781-000-0003",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 4,
        "firstName": "Renjith",
        "lastName": "Raj",
        "managerId": 1,
        "managerName": "Real Prad",
        "reports": 2,
        "title": "CIO",
        "department": "Engineering",
        "cellPhone": "617-000-0004",
        "officePhone": "781-000-0004",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 5,
        "firstName": "Vaishak",
        "lastName": "CP",
        "managerId": 1,
        "managerName": "Real Prad",
        "reports": 0,
        "title": "COO",
        "department": "Corporate",
        "cellPhone": "617-000-0005",
        "officePhone": "781-000-0005",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 6,
        "firstName": "Yadu",
        "lastName": "Sudakaran",
        "managerId": 2,
        "managerName": "John Williams",
        "reports": 0,
        "title": "Manager",
        "department": "Engineering",
        "cellPhone": "617-000-0006",
        "officePhone": "781-000-0006",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 7,
        "firstName": "Nidhin",
        "lastName": "Chandramohan",
        "managerId": 1,
        "managerName": "Real Prad",
        "reports": 0,
        "title": "CFO",
        "department": "Accounts",
        "cellPhone": "617-000-0007",
        "officePhone": "781-000-0007",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 8,
        "firstName": "Akhil",
        "lastName": "S",
        "managerId": 4,
        "managerName": "Renjith Raj",
        "reports": 0,
        "title": "Senior Engineer",
        "department": "Engineering",
        "cellPhone": "617-000-0008",
        "officePhone": "781-000-0008",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    },

    {
        "id": 9,
        "firstName": "Ranju",
        "lastName": "R",
        "managerId": 4,
        "managerName": "Renjith Raj",
        "reports": 0,
        "title": "Senior Engineer",
        "department": "Engineering",
        "cellPhone": "617-000-0009",
        "officePhone": "781-000-0009",
        "email": "hello@sayonetech.com",
        "city": "Cochin, KL",
        "pic": "logo.jpg",
        "twitterId": "@sayonetech",
        "blog": "http://blog.sayonetech.com"
    }
    ];

    // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
    // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
    // service with a JSON service that gets its data from a remote server without having to changes anything
    // in the modules invoking the data service since the api is already async.

    return {
        findAll: function() {
            var deferred = $q.defer();
            deferred.resolve(employees);
            return deferred.promise;
        },

        findById: function(employeeId) {
            var deferred = $q.defer();
            var employee = employees[employeeId - 1];
            deferred.resolve(employee);
            return deferred.promise;
        },

        findByName: function(searchKey) {
            var deferred = $q.defer();
            var results = employees.filter(function(element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise;
        },

        findByManager: function (managerId) {
            var deferred = $q.defer(),
            results = employees.filter(function (element) {
                return parseInt(managerId) === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise;
        }

    }

});