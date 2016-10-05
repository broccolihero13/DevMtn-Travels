// INITILIZE CONTROLLER
// ============================================================
angular.module("devmtnTravel").controller("locationsCtrl", function($scope, mainSrv) {
    // VARIABLES
    // ============================================================
    $scope.packageInfo = mainSrv.travelInfo;
    // FUNCTIONS
    // ============================================================
});
