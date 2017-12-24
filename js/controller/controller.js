var app = angular.module('alsqstop', []);
app.controller('mainCtrl', function($scope, $http) {
    $scope.CompanyName = "ALS Quick Mart";

    var currentTime = new Date();
    $scope.CurrentYear = currentTime.getFullYear();

    function getRandomVal(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.stores = {
        "stores": [
            { "location": "Elmhurst, PA", "address": "554 State Route #435", "zipcode": "18444", "phone": "5708424054", "img": "d/shop_1.jpg" },
            { "location": "Dunmore, PA", "address": "1172 E Drinker St", "zipcode": "18512", "phone": "5703426575", "img": "d/shop_2.jpg" },
            { "location": "Covington, PA", "address": "10 Scranton Pocono Hwy", "zipcode": "18424", "phone": "5708426214", "img": "d/shop_3.jpg" },
            { "location": "Dunmore, PA", "address": "1219 Wheeler Ave", "zipcode": "18510", "phone": "5705079776", "img": "" },
            { "location": "Bearcreek, PA", "address": "3377 Bearcreek Blvd", "zipcode": "18702", "phone": "5702356177", "img": "d/shop_5.jpg" },
            { "location": "Bearcreek, PA", "address": "3000 Bearkcreek Blvd", "zipcode": "18702", "phone": "5702356177", "img": "d/shop_6.jpg" },
            { "location": "Newfoundland, PA", "address": "1042 Main St", "zipcode": "18445", "phone": "5706760407", "img": "d/shop_7.jpg" },
            { "location": "Pittston, PA", "address": "308 S Main St", "zipcode": "18640", "phone": "5706554772", "img": "d/shop_8.jpg" },
            { "location": "Drums, PA", "address": "547 N Hunter Hwp", "zipcode": "18222", "phone": "5707881139", "img": "" },
            { "location": "Taylor, PA", "address": "527 N Main St", "zipcode": "18517", "phone": "5705620217", "img": "" },
        ]
    };
});