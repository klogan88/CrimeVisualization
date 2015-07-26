(function() {
    "use strict";

    function controller($http) {
        var vm = this;

        var map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });

        // Simple GET request example :
        $http.get('https://data.seattle.gov/resource/pu5n-trf4.json?$where=within_circle(incident_location, 47.59815, -122.334540, 500)').
            success(function(data, status, headers, config) {
                console.log("Success.......");
            }).
            error(function(data, status, headers, config) {
                console.log("Fail.......");
            });

    }

    angular
        .module('crimeComponents')
        .directive('graphVisualization', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/components/graph-visualization.directive.html',
                controller: controller,
                controllerAs: 'vm'
            };
        });

})();
