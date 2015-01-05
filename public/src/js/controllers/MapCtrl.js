angular.module('MapCtrl', ['uiGmapgoogle-maps'])
    .controller('MapController', function ($scope, uiGmapGoogleMapApi, Shouts) {
        // Default to Seattle
        $scope.map = {center: {latitude: 47.6097, longitude: -122.3331}, zoom: 13, options: {disableDefaultUI: true}};
        $scope.shouts = [];
        $scope.shout = function (e) {
            e.preventDefault();

            alert('Clicked');
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.$apply(function () {
                    $scope.map.center = {latitude: position.coords.latitude, longitude: position.coords.longitude};
                    // TODO: remove this once loading from db
                    //$scope.markers.push({
                    //    coords: position.coords,
                    //    id: 1
                    //});
                });
            });
        } else {
            alert("Your browser does not support location :(");
        }


        // Retrieve the shouts from the ShoutService
        //Shouts.get(function (shouts) {
        //    $scope.$apply(function () {
        //        for (var shout in shouts) {
        //            var marker = {
        //                coords: shout.coords,
        //                id: shout._id
        //            };
        //            $scope.markers.push(marker);
        //        }
        //    });
        //});

        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function (maps) {

            var shout = {
                coords: {latitude: 47.6097, longitude: -122.3331},
                id: 1,
                show: false,
                text: "Hello"
            };

            shout.onClick = function () {
                shout.show = !shout.show;
            };

            $scope.shouts.push(shout);

        });
    });