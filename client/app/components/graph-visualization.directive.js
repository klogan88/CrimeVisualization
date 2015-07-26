(function() {
    "use strict";

    function controller() {
        var vm = this;
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
